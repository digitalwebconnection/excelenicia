const express = require('express');
const multer = require('multer');
const Country = require('../models/Country');
const protect = require('../middleware/auth');
const { uploadToCloudinary } = require('../config/cloudinary');

const router = express.Router();

// Use memory storage so we can stream buffers directly to Cloudinary
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

// ─── Helper: upload if file present ──────────────────────────────────────────
const maybeUpload = async (file, folder) => {
  if (!file) return null;
  return uploadToCloudinary(file.buffer, folder);
};

/* ════════════════════════════════════════════════════════════
   PUBLIC ROUTES  (no auth required — used by the frontend)
════════════════════════════════════════════════════════════ */

// GET /api/countries  — list all countries (card data only)
router.get('/', async (req, res) => {
  try {
    const countries = await Country.find({}, 'name code description image population');
    res.json(countries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/countries/:idOrCode  — full country page data
router.get('/:idOrCode', async (req, res) => {
  try {
    const { idOrCode } = req.params;
    let country;

    // Try finding by ID first if it looks like a MongoDB ObjectId
    if (idOrCode.match(/^[0-9a-fA-F]{24}$/)) {
      country = await Country.findById(idOrCode);
    }

    // If not found by ID, try finding by code
    if (!country) {
      country = await Country.findOne({ code: idOrCode.toLowerCase() });
    }

    if (!country) return res.status(404).json({ message: 'Country not found' });
    res.json(country);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* ════════════════════════════════════════════════════════════
   PROTECTED ROUTES  (admin only)
════════════════════════════════════════════════════════════ */

// POST /api/countries  — create a new country
// Accepts multipart/form-data with optional image files
router.post(
  '/',
  protect,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'heroBackgroundImages', maxCount: 10 },
    { name: 'whyStudyImages', maxCount: 20 },
    { name: 'documentImages', maxCount: 30 },
    { name: 'courseImages', maxCount: 20 },
  ]),
  async (req, res) => {
    try {
      const body = JSON.parse(req.body.data);  // frontend sends JSON in "data" field
      const files = req.files || {};

      // ── Card thumbnail
      if (files.image?.[0]) {
        body.image = await maybeUpload(files.image[0], 'excelencia/countries');
      }

      // ── Hero background images
      if (files.heroBackgroundImages?.length) {
        const urls = await Promise.all(
          files.heroBackgroundImages.map(f => uploadToCloudinary(f.buffer, 'excelencia/hero'))
        );
        body.hero = body.hero || {};
        // Merge with any string URLs already in body.hero.backgroundImages
        body.hero.backgroundImages = [
          ...(body.hero.backgroundImages || []),
          ...urls,
        ];
      }

      // ── Why Study point images
      if (files.whyStudyImages?.length && body.whyStudy?.points) {
        let fi = 0;
        for (let i = 0; i < body.whyStudy.points.length; i++) {
          if (body.whyStudy.points[i]._uploadImage && files.whyStudyImages[fi]) {
            body.whyStudy.points[i].image = await uploadToCloudinary(
              files.whyStudyImages[fi].buffer, 'excelencia/why-study'
            );
            fi++;
          }
        }
      }

      // ── Document images
      if (files.documentImages?.length && body.documents?.list) {
        let fi = 0;
        for (let i = 0; i < body.documents.list.length; i++) {
          if (body.documents.list[i]._uploadImage && files.documentImages[fi]) {
            body.documents.list[i].image = await uploadToCloudinary(
              files.documentImages[fi].buffer, 'excelencia/documents'
            );
            fi++;
          }
        }
      }

      // ── Course images
      if (files.courseImages?.length && body.courses?.list) {
        let fi = 0;
        for (let i = 0; i < body.courses.list.length; i++) {
          if (body.courses.list[i]._uploadImage && files.courseImages[fi]) {
            body.courses.list[i].image = await uploadToCloudinary(
              files.courseImages[fi].buffer, 'excelencia/courses'
            );
            fi++;
          }
        }
      }

      // Clean up helper flags
      const cleanPoints = arr => arr?.map(({ _uploadImage, _previewUrl, ...rest }) => rest);
      if (body.whyStudy?.points)  body.whyStudy.points  = cleanPoints(body.whyStudy.points);
      if (body.documents?.list)   body.documents.list   = cleanPoints(body.documents.list);
      if (body.courses?.list)     body.courses.list     = cleanPoints(body.courses.list);

      const country = await Country.create(body);
      res.status(201).json(country);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
);

// PUT /api/countries/:id  — update a country
router.put(
  '/:id',
  protect,
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'heroBackgroundImages', maxCount: 10 },
    { name: 'whyStudyImages', maxCount: 20 },
    { name: 'documentImages', maxCount: 30 },
    { name: 'courseImages', maxCount: 20 },
  ]),
  async (req, res) => {
    try {
      const body = JSON.parse(req.body.data);
      console.log('--- UPDATE COUNTRY ---');
      console.log('Received meta from frontend:', body.meta);
      const files = req.files || {};

      if (files.image?.[0]) {
        body.image = await maybeUpload(files.image[0], 'excelencia/countries');
      }

      if (files.heroBackgroundImages?.length) {
        const urls = await Promise.all(
          files.heroBackgroundImages.map(f => uploadToCloudinary(f.buffer, 'excelencia/hero'))
        );
        body.hero = body.hero || {};
        body.hero.backgroundImages = [
          ...(body.hero.backgroundImages || []),
          ...urls,
        ];
      }

      if (files.whyStudyImages?.length && body.whyStudy?.points) {
        let fi = 0;
        for (let i = 0; i < body.whyStudy.points.length; i++) {
          if (body.whyStudy.points[i]._uploadImage && files.whyStudyImages[fi]) {
            body.whyStudy.points[i].image = await uploadToCloudinary(
              files.whyStudyImages[fi].buffer, 'excelencia/why-study'
            );
            fi++;
          }
        }
      }

      if (files.documentImages?.length && body.documents?.list) {
        let fi = 0;
        for (let i = 0; i < body.documents.list.length; i++) {
          if (body.documents.list[i]._uploadImage && files.documentImages[fi]) {
            body.documents.list[i].image = await uploadToCloudinary(
              files.documentImages[fi].buffer, 'excelencia/documents'
            );
            fi++;
          }
        }
      }

      if (files.courseImages?.length && body.courses?.list) {
        let fi = 0;
        for (let i = 0; i < body.courses.list.length; i++) {
          if (body.courses.list[i]._uploadImage && files.courseImages[fi]) {
            body.courses.list[i].image = await uploadToCloudinary(
              files.courseImages[fi].buffer, 'excelencia/courses'
            );
            fi++;
          }
        }
      }

      const cleanPoints = arr => arr?.map(({ _uploadImage, _previewUrl, ...rest }) => rest);
      if (body.whyStudy?.points)  body.whyStudy.points  = cleanPoints(body.whyStudy.points);
      if (body.documents?.list)   body.documents.list   = cleanPoints(body.documents.list);
      if (body.courses?.list)     body.courses.list     = cleanPoints(body.courses.list);

      const country = await Country.findById(req.params.id);
      if (!country) return res.status(404).json({ message: 'Country not found' });
      
      // Update fields
      Object.assign(country, body);
      await country.save();
      
      res.json(country);
    } catch (err) {
      console.error(err);
      res.status(400).json({ message: err.message });
    }
  }
);

// DELETE /api/countries/:id  — delete a country
router.delete('/:id', protect, async (req, res) => {
  try {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) return res.status(404).json({ message: 'Country not found' });
    res.json({ message: 'Country deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
