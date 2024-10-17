const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    socialMediaHandle: {
        type: String,
        required: true,
    },
    images: {
        type: [String], // Array of image paths
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('User', userSchema); // Ensure this line is present
