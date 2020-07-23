const express = require('express')
const router = express.Router()

const Vinyl = require('./../models/Vinyl.model')

// Endpoints

//show all vinyls
router.get('/getAllVinyls', (req, res, next) => {   // en ninguno de los 2 me renderiza, pero por problema al conectar a BBDD

    Vinyl.find()
        .then(response => res.json(response))
        .catch(err => next(err))

})

// show one vinyl details
router.get('/getOneVinyl/:vinyl_id', (req, res, next) => {

    //res.send(req.params.disk_id)
    Vinyl.findById(req.params.vinyl_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

// update vinyl details

router.put('/getOneVinyl/:vinyl_id', (req, res, next) => {

    const{title, image,artists, label, genre, price, year, catNo, tracklist} = req.body

    Vinyl.findByIdAndUpdate(req.params.vinyl_id, { title, image, artists, label, genre, price, year, catNo, tracklist }, {new:true})
        .then(data => res.json(data))
        .catch(err => next(err))
})


// delete vinyl
router.delete('/getOneVinyl/:vinyl_id', (req, res, next) => {
    
    Vinyl.findByIdAndRemove(req.params.vinyl_id)
        .then(post => res.json(post))
        .catch(err => next(err))
}
    
    
)

// CREATE VINYL
router.post('/newVinyl', (req, res, next) => {   //ESTO VA BIEN< TESTEADO CON POSTMAN

    Vinyl.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))

})


module.exports = router
    





