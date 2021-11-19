const asyncHandler = require('express-async-handler')
const User = require('../models/user.js');
const generateToken = require('../util/generateToken.js');

const registerUser =  asyncHandler( async(req, res) => {
    const { name, username, email, password } = req.body;

    const userExists = await User.findOne({email});
    const userExists1 = await User.findOne({username});

    
    

    if (userExists || userExists1) {
        res.status(400);
        throw new Error('User already exists.');
    } 

    const user = await User.create({
        name,
        username,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Error occurred.')
    }

    res.json({
        name,
        username,
        email,
    });
});

const authUser =  asyncHandler( async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            token: generateToken(user._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password.')
    }
});

module.exports =  { registerUser, authUser };