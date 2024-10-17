const express = require('express');
const { createUser, getAllUsers } = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Multer storage configuration for saving images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Save images to 'uploads' folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Rename file with timestamp
    },
});

const upload = multer({ storage });

// Create user with multiple image uploads
router.post('/', upload.array('images', 5), createUser); // Max 5 images

// Fetch all users
router.get('/', getAllUsers);

module.exports = router;
