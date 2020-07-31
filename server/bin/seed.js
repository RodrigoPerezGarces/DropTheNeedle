// Database
const mongoose = require('mongoose')
require('dotenv').config()

//const dbName = 'drop-the-needle'
//mongoose.connect(`mongodb://localhost/${dbName}`)
//mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`, { useNewUrlParser: true, useUnifiedTopology: true })
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
        price: 24.99,
        year: '2015',
        catNo: 'DRP025LP',
        tracklist: ' A Wairunga Blues	A2 Slings & Arrows B1 10 Feet Tall	B2 Wheels C1 Razor C2 Makkan C3 Fish In The Sea D1 Cortina Motors D2 Novak'

    },
    {
        title: 'The Best',
        image: 'https://img.discogs.com/rkyku6hM1Qfzy4IrXvUb1u3AqZo=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-10280957-1497196303-7318.jpeg.jpg',
        artists: 'Omar S',
        label: 'FXHE',
        genre: ['House', 'Techno', 'Deep House'],
        price: 34.99,
        year: '2016',
        catNo: 'AOS4400',
        tracklist: `A1	Time Mo 1	 A2	On Your Way	 B	Chama Piru's	 C1	Seen Was Set	C2	Smash	D	Buggin Out E1	You Silk Suit Wearin Mulafuk'ka	 E2	Take Ya Pik, Nik!!!!!	F	Ah'Revolution (Poli Grip For Partials Mix'Nik) G	Bitch, , , , I'll Buy Another One!!!	H	Heard'Chew Single`,
        description: 'Includes insert with track titles and infos. FXHE Records 2016'

    },
    {
        title: 'Mahogany Brown',
        image: 'https://img.discogs.com/dsMgL96vbiSu-kPASd05U6ihZr4=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13732-1404646807-1278.jpeg.jpg',
        artists: 'Moodymann',
        label: 'Peacefrog',
        genre: 'Dance',
        price: 30.99,
        year: '1998',
        catNo: 'PF074',
        tracklist: 'A1	Radio	7:07 A2	Sunshine	5: 43 A3	On The Run	7: 35 B1	M.E.A.N.D.N.J.B	3: 57 B2	Mahogany Brown	5: 30 C1	Me And My Peoples Eyes	7: 03 C2	Stoneodenjoe	4: 40 C3	Joy PT.III	6: 12 D	Black Sunday	10: 46',
        description: '[C] 1998 Peace Frog Records. Track C2 appears as "Stoneodenjoe" on the back of the sleeve and as "Stoneodenjoe (House)" on the center label. Track durations are not provided on the record.'

    },

]

// SEED

Vinyl.create(vinyls)
    .then(allTheVinyls => {
        console.log(`Created ${allTheVinyls.length} vinyls`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the vinyls', err))