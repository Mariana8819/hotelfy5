const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['Deluxe', 'Suite', 'Standard'],
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Room', roomSchema);
