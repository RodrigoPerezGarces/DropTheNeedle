const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mongooseAlgolia = require('mongoose-algolia')

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
        type: Number,
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
    description:{
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

vinylSchema.plugin(mongooseAlgolia, {
    appId: process.env.ALGOLIA_APP_ID,
    apiKey: process.env.ALGOLIA_API_KEY,
    indexName: 'DropTheNeedle',
    selector: 'title _id image genre artists label price year catNo description tracklist',
    debug: true

})

const Vinyl = mongoose.model("Vinyl", vinylSchema)

Vinyl.SyncToAlgolia()
Vinyl.SetAlgoliaSettings({
    searchableAttributes: ['title', 'artists', 'label', 'genre']
})

module.exports = Vinyl