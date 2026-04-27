const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema(
    {
        tag: { type: String, required: true },
        eyebrow: { type: String },

        title: { type: String, required: true },
        titleItalic: { type: String },

        description: { type: String },

        cta: { type: String },
        ctaLink: { type: String },

        secondaryCta: { type: String },
        secondaryLink: { type: String },

        accent: { type: String },

        bg: { type: String },

        imageUrl: { type: String, required: true },
        imageAlt: { type: String },

        badge: { type: String },

        stat1: {
            value: String,
            label: String,
        },

        stat2: {
            value: String,
            label: String,
        },

        floatColor: { type: String },

        particles: [{ type: String }],

        isActive: { type: Boolean, default: true },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);
const Slider = mongoose.model('Slide', slideSchema);

module.exports = Slider;
