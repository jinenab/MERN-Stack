const mongoose = require('mongoose')
const Shema = mongoose.Schema
const userShema = new Shema({
    user: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
}, {
    timestamp: 3,

})

const User = mongoose.model('User', userShema)
module.exports = User