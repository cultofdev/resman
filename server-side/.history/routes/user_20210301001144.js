const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('users');

router.get('/', getUser, (req, res) => {
    res.json(res.user);
})

router.post('/', async (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        full_name: req.body.fullName,
    });

    try {
        const newUser = await user.save();
        res.status(200).json({
            msg: newUser
        })
    } catch(error) {
        res.status(400).json({
            msg: error.message
        })
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findOne({username: req.query.username, password: req.query.password});
        if(user === null) {
            return res.status(404).json({
                msg: `user does not exist!`
            })
        }
    } catch(error) {
        return res.status(500).json({
            msg: `error encountered!`
        })
    }

    res.user = user;
    next();
}

module.exports = router;