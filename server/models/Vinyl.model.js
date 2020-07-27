const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vinylSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    image: {
        type: String,
        default:'../images/diskDefault.jpeg'
    },
    artists: {
        type: String,
        require: true
    },
    label: {
        type: String,
        require: true
    },
    genre: {
        type: [String],
        enum: ['Jazz', 'Funk', 'Electronic', 'Dance', 'House', 'Deep House', 'Techno', 'Acid', 'BreakBeat', 'Electro', 'Latin', 'Disco', 'Soul', 'Reggae', 'Rock', 'Experimental', 'Ambient', 'Pop'],
        require: true
    },
    price: {
        type: String,
        require: true
    },
    year: {
        type: String
    },
    catNo: {
        type: String,
        require: true
    },
    tracklist: {
        type: String
    },
    countInStock: {
        type: Number,
        default: 0,
        require: true
    },

    recordOwner: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    wishlistOwner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
    timestamps: true
})

const Vinyl = mongoose.model("Vinyl", vinylSchema)

module.exports = Vinyl