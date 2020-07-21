const mongoose = require("mongoose")
const Schema = mongoose.Schema

const vinylSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    image: {
        type: String,
        default:'../images/diskDefault.jpeg'
    },
    artists: {
        type: String,
    },
    label: {
        type: String,
    },
    genre: {
        type: [String],
        enum: ['Jazz', 'Funk', 'Electronic', 'Dance', 'House', 'Deep House', 'Techno', 'Acid', 'BreakBeat', 'Electro', 'Latin', 'Disco', 'Soul', 'Reggae', 'Rock', 'Experimental', 'Ambient', 'Pop']
    },
    price: {
        type: Number
    },
    year: {
        type: Number
    },
    catNo: {
        type: String
    },
    tracklist: {
        position: String,
        title: String,
    },

    recordOwner: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    wishlistOwner: [{ type: Schema.Types.ObjectId, ref: 'User' }],
}, {
    timestamps: true
})

const Vinyl = mongoose.model("Vinyl", vinylSchema)

module.exports = Vinyl