const User = require('../models/userModel');

// Create user with images
const createUser = async (req, res) => {
    try {
        const { name, socialMediaHandle } = req.body;
        if (!name || !socialMediaHandle || !req.files) {
            return res.status(400).json({ error: 'Missing required fields' });
        }
        const images = req.files.map(file => file.path);

        const newUser = new User({
            name,
            socialMediaHandle,
            images,
        });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: 'Server error' });
    }
};


// Fetch all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

module.exports = { createUser, getAllUsers };
