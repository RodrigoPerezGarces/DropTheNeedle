
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    address: {
        Street: String,
        StreetNumber: Number,
        PostalCode: Number,
        City: String,
        Country: String

    },
    password: {
        type: String
    },
    avatar: {
        type: String,
        default: '../images/avatarDefault.png'
    },
    email: {
        type: String,
        default: '1234@droptheneedle.com'
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER'
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    }


}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema)

module.exports = User