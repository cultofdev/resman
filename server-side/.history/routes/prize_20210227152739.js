const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Prize = mongoose.model('prize');

// get all prize
router.get('/', async (req, res) => {
    try {
        const prize = await Prize.find();
        res.json(prize)
    } catch(error) {
        res.status(400).json({
            msg: error.message
        });
    }
})