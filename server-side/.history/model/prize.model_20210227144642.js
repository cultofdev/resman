const mongoose = require('mongoose');

const prizesSchema = new mongoose.Schema({
    id: {
        type: Object
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    image_url: {
        type: String
    },
    quantity: {
        type: Number
    }
});

mongoose.model('prizes', prizesSchema);