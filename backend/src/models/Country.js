const mongoose = require('mongoose');

/* ── Sub-schemas ─────────────────────────────────────────── */

const WhyStudyPointSchema = new mongoose.Schema({
  title:       { type: String, required: true },
  description: { type: String, default: '' },
  image:       { type: String, default: '' },      // Cloudinary URL
  full:        { type: String, default: '' },
  emoji:       { type: String, default: '' },
});

const EducationSectionSchema = new mongoose.Schema({
  title:   { type: String, required: true },
  content: { type: String, default: '' },
});

const DocumentItemSchema = new mongoose.Schema({
  text:  { type: String, required: true },
  image: { type: String, default: '' },            // Cloudinary URL
});

const IntakeItemSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  tag:         { type: String, default: '' },
  description: { type: String, default: '' },
  icon:        { type: String, default: 'fall' },  // fall | winter | spring | custom
});

const CourseItemSchema = new mongoose.Schema({
  icon:        { type: String, default: '' },
  title:       { type: String, required: true },
  description: { type: String, default: '' },
  image:       { type: String, default: '' },      // Cloudinary URL
  full:        { type: String, default: '' },
});

const MetaSchema = new mongoose.Schema({
  title:       { type: String, default: '' },
  description: { type: String, default: '' },
  keywords:    { type: String, default: '' },
  canonical:   { type: String, default: '' },
  longContent: { type: String, default: '' },
  schema:      { type: String, default: '' },
}, { _id: false });

/* ── Main Country Schema ─────────────────────────────────── */

const CountrySchema = new mongoose.Schema(
  {
    // Core fields
    name:        { type: String, required: true },
    code:        { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, default: '' },
    image:       { type: String, default: '' },    // Cloudinary URL (card thumbnail)
    population:  { type: String, default: '' },

    // Meta tags
    meta: { type: MetaSchema, default: () => ({}) },

    // Hero section
    hero: {
      title:            { type: String, default: '' },
      subtitle:         { type: String, default: '' },
      description:      { type: String, default: '' },
      backgroundImages: [{ type: String }],
      ctaText:          { type: String, default: 'Book Free Consultation' },
      ctaText2:         { type: String, default: 'View Courses' },
    },

    // Why Study section
    whyStudy: {
      title:  { type: String, default: '' },
      intro:  { type: String, default: '' },
      points: [WhyStudyPointSchema],
    },

    // Education System section
    educationSystem: {
      title:      { type: String, default: '' },
      intro:      { type: String, default: '' },
      sections:   [EducationSectionSchema],
      highlights: [{ type: String }],
    },

    // Documents section
    documents: {
      title:    { type: String, default: '' },
      subtitle: { type: String, default: '' },
      list:     [DocumentItemSchema],
    },

    // Intakes section
    intakes: {
      title:    { type: String, default: '' },
      subtitle: { type: String, default: '' },
      list:     [IntakeItemSchema],
    },

    // Courses section
    courses: {
      title: { type: String, default: '' },
      list:  [CourseItemSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Country', CountrySchema);
