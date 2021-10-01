const mongoose = require('mongoose')
const colors = require('colors')
const dotenv = require('dotenv')


const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to the Database".green);
}

module.exports = connectDB;