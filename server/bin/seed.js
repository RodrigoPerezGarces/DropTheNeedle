// Database
const mongoose = require('mongoose')
require('dotenv').config
const dbName = 'drop-the-needle'
mongoose.connect(`mongodb://localhost/${dbName}`)

// Model

const Disk = require('../models/disk.model')

// DATA

const vinyls = [
    {
        title: 'Bays',
        image: 'https://img.discogs.com/pN_U-H74Q5Okl-mvunT3bC34pcM=/fit-in/600x596/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7635294-1445697551-9159.jpeg.jpg',
        artists: 'Fat Freddys DRop',
        label: 'The Drop',
        genre: 'Reggae/Dancehall',
        price: 24.99 ,
        year: 2015 ,
        CatNo: 'DRP025LP',

    },
    {
        title: 'Thank You For Letting Be Myself',
        image: 'https://img.discogs.com/4WOoE8cG2DIfjA8SkW_LsEkmLho=/fit-in/600x532/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4402935-1365114927-4257.jpeg.jpg',
        artists: 'Omar S',
        label: 'FXHE',
        genre: ['House', 'Techno', 'Deep House'],
        price: 51.99,
        year: 2013,
        CatNo: 'AOS7700',

    },
    {
        title: 'Mahogany Brown',
        image: ,
        artists: 'Moodymann',
        label: 'Peacefrog',
        genre: 'Dance',
        price: 30.99,
        year: 1998,
        CatNo: 'PF074',

    },
    
]

// SEED

Disk.create(vinyls)
    .then(alltheVinyls => {
        console.log(`Created ${allTheVinyls.length} vinyls`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the vinyls', err))