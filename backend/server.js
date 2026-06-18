require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');

const app = express();

// ─── Database ─────────────────────────────────────────────
connectDB();

// ─── Middleware ───────────────────────────────────────────
const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];
if (process.env.FRONTEND_URL) {
  const origins = process.env.FRONTEND_URL.split(',').map(url => url.trim().replace(/\/$/, ""));
  origins.forEach(origin => {
    allowedOrigins.push(origin);
    // Automatically allow 'www.' variant if not already present and it's a root domain
    if (origin.startsWith('https://') && !origin.startsWith('https://www.')) {
      allowedOrigins.push(origin.replace('https://', 'https://www.'));
    }
  });
}

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.warn(`[CORS] Blocked request from origin: ${origin}`);
      console.warn(`[CORS] Allowed origins: ${allowedOrigins.join(', ')}`);
      callback(new Error(`CORS: Origin '${origin}' not allowed`));
    }
  },
  credentials: true,
}));

// We do NOT use express.json() globally because the country routes
// receive multipart/form-data (handled by multer).
// We only parse JSON for the auth route.
app.use('/api/auth', express.json(), require('./src/routes/auth'));
app.use('/api/countries', require('./src/routes/countries'));
app.use('/api/blogs', require('./src/routes/blogs'));

// ─── Health check ─────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// ─── Error handler ────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
});

// ─── Start ────────────────────────────────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
