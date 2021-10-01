const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, 'Please Add First Name'],
        trim: true
    },

    lastName: {
        type: String,
        required: [true, 'Please Add Last Name'],
        trim: true
    },

    email: {
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please Add A valid Email'],
        unique: true
    },

    gender: {
        type: String,
        required: [true, 'Please Enter Gender'],

    },
    password: {
        type: String,
        required: [true, 'Please Enter Password'],
        select: false
    },

    age: {
        type: Number,
        required: [true, 'Please add your Age']
    },

    matriculation: {
        schoolName: String,
        totalPercentage: Number
    },

    intermediate: {
        schoolName: String,
        totalPercentage: Number
    },

    graduation: [
        {
            collegeName: String,
            sem: Number,
            cgpa: Number
        }
    ],

    skills: [
        {
            title: String,
            link: String,
        }
    ],

    achievements: [{
        title: String,
        description: String,
    }],

    rating: Number,

    photo: {
        type: String,
        default: 'no-image.jpg'
    },

    bio: {
        type: String,
        maxlength: 1000
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

//Calculate Average Marks
// UserSchema.pre('save', async function (next) {

// })


//Password Hashing
UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

//Get Signed Token from JWT
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}

//Matching Password
UserSchema.methods.checkPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


module.exports = mongoose.model('User', UserSchema);