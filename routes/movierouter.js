const express = require('express')

const movieCtrl = require('../controllers/moviectrl')

const router = express.Router()

router.get('/movies',movieCtrl.getMovies)
router.get('/movie/:id',movieCtrl.getMovie)
router.post('/movie',movieCtrl.createMovie)
router.put('/movie/:id',movieCtrl.updateMovie)
router.delete('/movie/:id',movieCtrl.deleteMovie)

module.exports = router