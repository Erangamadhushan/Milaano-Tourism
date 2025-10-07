const mongoose = require('mongoose');
const express = require('express');
const { User } = require('../models/Item');
require('dotenv').config();

const userRegisterRouter = express.Router();

userRegisterRouter.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = userRegisterRouter;
