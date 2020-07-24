// Database
const mongoose = require('mongoose')
require('dotenv').config()

// const dbName = 'drop-the-needle'
// mongoose.connect(`mongodb://localhost/${dbName}`)
//mongoose.connect(`mongodb://localhost/${process.env.DB}`, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(`mongodb+srv://${process.env.MONGODBUSER}:${process.env.MONGODBPASSWORD}@cluster0.xzq3c.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
// Model

const Vinyl = require('../models/Vinyl.model')

// DATA

const vinyls = [
    {
        title: 'Bays',
        image: 'https://img.discogs.com/pN_U-H74Q5Okl-mvunT3bC34pcM=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7635294-1445697551-9159.jpeg.jpg',
        artists: 'Fat Freddys Drop',
        label: 'The Drop',
        genre: 'Reggae',
        price: '24.99 €',
        year: '2015',
        catNo: 'DRP025LP',

    },
    {
        title: 'Thank You For Letting Be Myself',
        image: 'https://img.discogs.com/4WOoE8cG2DIfjA8SkW_LsEkmLho=/fit-in/600x532/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4402935-1365114927-4257.jpeg.jpg',
        artists: 'Omar S',
        label: 'FXHE',
        genre: ['House', 'Techno', 'Deep House'],
        price: '51.99 €',
        year: '2013',
        catNo: 'AOS7700',

    },
    {
        title: 'Mahogany Brown',
        image: 'https://img.discogs.com/dsMgL96vbiSu-kPASd05U6ihZr4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13732-1404646807-1278.jpeg.jpg',
        artists: 'Moodymann',
        label: 'Peacefrog',
        genre: 'Dance',
        price: '30.99 €',
        year: '1998',
        catNo: 'PF074',

    },

]

// SEED

Vinyl.create(vinyls)
    .then(allTheVinyls => {
        console.log(`Created ${allTheVinyls.length} vinyls`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the vinyls', err))