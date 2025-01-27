const mongoose = require('mongoose')
const connectDB = async () => {
    await mongoose.connect("mongodb+srv://spartan:dhirajchanne%40123@spartan.r94fh.mongodb.net/devTinder")
}

module.exports = connectDB;

