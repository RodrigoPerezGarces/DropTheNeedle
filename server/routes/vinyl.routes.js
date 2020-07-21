const express = require('express')
const router = express.Router()

const Vinyl = require('./../models/Vinyl.model')

// Endpoints
router.get('/getAllVinyls', (req, res, next) => {   // en ninguno de los 2 me renderiza, pero por problema al conectar a BBDD

    Vinyl.find()
        .then(response => res.send(response))
        .catch(err => next(err))

})

router.get('/getOneVinyl/:vinyl_id', (req, res, next) => {

    //res.send(req.params.disk_id)
    Vinyl.findById(req.params.vinyl_id)
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.post('/newVinyl', (req, res, next) => {   //ESTO VA BIEN< TESTEADO CON POSTMAN

    Vinyl.create(req.body)
        .then(response => res.json(response))
        .catch(err => next(err))

})

//FALTAN EDIT Y DELETE

module.exports = router
    





