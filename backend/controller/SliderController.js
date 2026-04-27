const Slider = require("../models/Slider");
const fs = require("fs");
const path = require("path");
const { body, param, validationResult } = require("express-validator");

const safeParse = (value, fallback = null) => {
    try {
        if (!value) return fallback;

        // already object
        if (typeof value === "object") return value;

        // clean weird nested escaped strings
        let cleaned = value;

        // remove unwanted wrapping
        while (typeof cleaned === "string" && cleaned.startsWith('"')) {
            cleaned = JSON.parse(cleaned);
        }

        return typeof cleaned === "string" ? JSON.parse(cleaned) : cleaned;
    } catch {
        return fallback;
    }
};
// Helper function to delete image
const deleteImage = (imageUrl) => {
    if (!imageUrl) return;
    const filePath = path.join(__dirname, "..", imageUrl);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

// ✅ Validation Rules
const createUpdateValidation = [
    body("tag").trim().notEmpty().withMessage("Tag is required"),
    body("title").trim().notEmpty().withMessage("Title is required"),
    body("imageUrl").optional(),
    body("order").optional().isInt({ min: 0 }).withMessage("Order must be a positive number"),
    body("isActive").optional().isBoolean().withMessage("isActive must be boolean"),
];

// ✅ CREATE Hero Slider
exports.createHeroSlider = [
    ...createUpdateValidation,

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: errors.array(),
            });
        }

        try {
            // ✅ IMAGE
            const imageUrl = req.file
                ? `/uploads/categories/${req.file.filename}`   // FIXED folder
                : null;

            // ✅ SANITIZE BODY
            const data = { ...req.body };

            // convert types
            data.order = Number(data.order) || 0;
            data.isActive = data.isActive === "true" || data.isActive === true;

            // parse JSON fields
            data.stat1 = safeParse(data.stat1, {});
            data.stat2 = safeParse(data.stat2, {});
            data.particles = safeParse(data.particles, []);

            // fix corrupted structure
            if (!Array.isArray(data.particles)) {
                data.particles = ["✦", "⊹", "✧"];
            }

            // remove unwanted keys
            if (data.stat1 && data.stat1["0"]) delete data.stat1["0"];
            if (data.stat2 && data.stat2["0"]) delete data.stat2["0"];

            // final payload
            const sliderData = {
                ...data,
                imageUrl,
            };

            const slider = new Slider(sliderData);
            await slider.save();

            res.status(201).json({
                success: true,
                message: "Hero slider created successfully",
                data: slider,
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error creating slider",
                error: error.message,
            });
        }
    },
];

// ✅ GET ALL Hero Sliders
exports.getAllHeroSliders = async (req, res) => {
    try {
        const sliders = await Slider.find().sort({ order: 1, createdAt: -1 });

        res.status(200).json({
            success: true,
            count: sliders.length,
            data: sliders,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching sliders",
            error: error.message,
        });
    }
};

// ✅ GET SINGLE Hero Slider
exports.getHeroSlider = async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);

        if (!slider) {
            return res.status(404).json({
                success: false,
                message: "Slider not found",
            });
        }

        res.status(200).json({
            success: true,
            data: slider,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching slider",
            error: error.message,
        });
    }
};

// ✅ UPDATE Hero Slider
exports.updateHeroSlider = [
    ...createUpdateValidation,

    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: errors.array(),
            });
        }

        try {
            let slider = await Slider.findById(req.params.id);

            if (!slider) {
                return res.status(404).json({
                    success: false,
                    message: "Slider not found",
                });
            }

            // ✅ SANITIZE BODY
            const data = { ...req.body };

            // convert types
            data.order = Number(data.order) || 0;
            data.isActive = data.isActive === "true" || data.isActive === true;

            // parse JSON fields
            data.stat1 = safeParse(data.stat1, {});
            data.stat2 = safeParse(data.stat2, {});
            data.particles = safeParse(data.particles, []);

            // fallback fix (if still broken)
            if (!Array.isArray(data.particles)) {
                data.particles = ["✦", "⊹", "✧"];
            }

            // remove junk keys like "0"
            if (data.stat1 && data.stat1["0"]) delete data.stat1["0"];
            if (data.stat2 && data.stat2["0"]) delete data.stat2["0"];

            // ✅ IMAGE UPDATE
            if (req.file) {
                deleteImage(slider.imageUrl);
                data.imageUrl = `/uploads/categories/${req.file.filename}`;
            }

            // ✅ UPDATE
            slider = await Slider.findByIdAndUpdate(
                req.params.id,
                { $set: data },
                { new: true, runValidators: true }
            );

            res.status(200).json({
                success: true,
                message: "Hero slider updated successfully",
                data: slider,
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: "Error updating slider",
                error: error.message,
            });
        }
    },
];

// ✅ DELETE Hero Slider
exports.deleteHeroSlider = async (req, res) => {
    try {
        const slider = await Slider.findById(req.params.id);

        if (!slider) {
            return res.status(404).json({
                success: false,
                message: "Slider not found",
            });
        }

        // Delete associated image
        deleteImage(slider.imageUrl);

        await slider.deleteOne();

        res.status(200).json({
            success: true,
            message: "Hero slider deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting slider",
            error: error.message,
        });
    }
};