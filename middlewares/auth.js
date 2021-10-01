const jwt = require('jsonwebtoken')
const asyncHandler = require('./async')
const errorResponse = require('../utils/errorResponse')
const User = require('../models/User')


//Protect User
exports.protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.cookies.token) {
        token = req.cookies.token
    }

    //Make sure token exists
    if (!token) {
        res.redirect('login')
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log(decoded);
        req.user = await User.findById(decoded.id)
        next();
    } catch (error) {

    }
})