const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id: {
        type: Object
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    full_name: {
        type: String
    },
})

mongoose.model('users', userSchema);