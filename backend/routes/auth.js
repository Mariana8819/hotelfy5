const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) =>{
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username, 
            password: hashedPassword
        });
        await user.save();
        res.status(201).json({message: 'User registered' });
    } catch (err) {
        res.status(500).json({error: err.message});        
    }
})

router.post('/login', async(req, res)=>{
    const {username, password } = req.body;
    try {
        const user = await User.findOne({ username});
        if(!user || !(await bcrypt.compare(password, user.password))){
            return res.status(401).json({message: 'Invalid credentials'});
        }
        const token= jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
})

module.exports = router;