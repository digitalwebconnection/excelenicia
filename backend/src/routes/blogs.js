const express  = require('express');
const multer   = require('multer');
const Blog     = require('../models/Blog');
const protect  = require('../middleware/auth');
const { cloudinary, uploadToCloudinary } = require('../config/cloudinary');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// ─── Helpers ─────────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

async function generateUniqueSlug(title, excludeId = null) {
  const base = slugify(title);
  let slug = base;
  let counter = 1;
  while (true) {
    const query = { slug };
    if (excludeId) query._id = { $ne: excludeId };
    const existing = await Blog.findOne(query);
    if (!existing) break;
    slug = `${base}-${counter++}`;
  }
  return slug;
}

function getPublicId(url) {
  if (!url) return null;
  try {
    const parts  = url.split('/');
    const upload = parts.indexOf('upload');
    if (upload === -1) return null;
    let start = upload + 1;
    if (/^v\d+$/.test(parts[start])) start++;
    return parts.slice(start).join('/').replace(/\.[^/.]+$/, '');
  } catch { return null; }
}

async function destroyCloudinaryImage(url) {
  const publicId = getPublicId(url);
  if (!publicId) return;
  try { await cloudinary.uploader.destroy(publicId); }
  catch (err) { console.warn('⚠️  Could not delete Cloudinary image:', err.message); }
}

// ─── PUBLIC ROUTES ────────────────────────────────────────────────────────────

// GET /api/blogs — list all blogs (newest first)
router.get('/', async (_req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
    res.json({ success: true, data: blogs });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/blogs/slug/:slug — single blog by slug (must be BEFORE /:id)
router.get('/slug/:slug', async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug }).lean();
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/blogs/:id — single blog by MongoDB id
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).lean();
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ─── PROTECTED ROUTES ────────────────────────────────────────────────────────

// POST /api/blogs — create blog
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    let body = req.body;
    if (req.body.data) {
      body = JSON.parse(req.body.data);
    }
    let imageUrl = body.image || '';
    if (req.file) {
      imageUrl = await uploadToCloudinary(req.file.buffer, 'excelencia/blogs');
    }

    const title = body.title || '';
    const slug  = await generateUniqueSlug(title);

    const blog = await Blog.create({
      title,
      slug,
      excerpt:    body.excerpt    || '',
      categories: body.categories || '',
      readTime:   body.readTime   || '',
      date:       body.date       || '',
      content:    body.content    || '',
      image:      imageUrl,
      meta:       body.meta       || {},
    });
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT /api/blogs/:id — update blog
router.put('/:id', protect, upload.single('image'), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    let body = req.body;
    if (req.body.data) {
      body = JSON.parse(req.body.data);
    }

    if (req.file) {
      await destroyCloudinaryImage(blog.image);
      blog.image = await uploadToCloudinary(req.file.buffer, 'excelencia/blogs');
    } else if (body.image !== undefined) {
      blog.image = body.image;
    }

    ['title', 'excerpt', 'categories', 'readTime', 'date', 'content', 'meta'].forEach(f => {
      if (body[f] !== undefined) blog[f] = body[f];
    });

    if (body.title !== undefined) {
      blog.slug = await generateUniqueSlug(body.title, blog._id);
    }

    await blog.save();
    res.json({ success: true, data: blog });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE /api/blogs/:id — delete blog + Cloudinary image
router.delete('/:id', protect, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });

    await destroyCloudinaryImage(blog.image);
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
