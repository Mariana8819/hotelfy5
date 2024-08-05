const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

router.post('/', async (req, res)=>{
    const { userId, room, date} = req.body;
    try{
        const reservation = new Reservation({ userId, room, date });
        await reservation.save();
        res.status(201).json(reservation);
    } catch(err){
        res.status(500).json({ error: err.message});
    }
});

module.exports = router;