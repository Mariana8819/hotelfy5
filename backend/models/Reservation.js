const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const reservationSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    room: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
})

module.exports = mongoose.model('Reservation', reservationSchema);