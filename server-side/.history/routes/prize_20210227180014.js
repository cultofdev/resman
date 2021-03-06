const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Prize = mongoose.model('prizes');

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
});

// get a specific prize
router.get('/', getPrize, (req, res) => {
    res.json(res.prize);
});

// update prize quantity
router.put('/', getPrize, async (req, res) => {
    try {
        const updatedPrize = await res.prize.save();
        res.json({
            msg: `successfully updated prize quantity : ${updatedPrize}`
        });
    } catch(error) {
        res.status(500).json({
            msg: `an error encountered while updating prize quantity`
        });
    }
});

async function getPrize(req, res, next) {
    let prize;

    try {
        prize = await Prize.findById(req.query.id);
        if(prize === null) {
            return res.status(404).json({
                msg: `unable to find prize with id: ${prize.id}`
            })
        }
    } catch(error) {
        return res.status(500).json({
            msg: `error encountered!`
        })
    }

    res.prize = prize;
    next();
}

module.exports = router;
