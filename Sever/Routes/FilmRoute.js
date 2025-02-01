const express = require('express');
const router = express.Router();
const FilmController= require('../Controller/FilmController');

router.post('/create',FilmController.CreateFilm);
router.get('/get-all',FilmController.GetAllFilm);
router.get('/get-by/:id',FilmController.GetFilmById);
router.put('/update/:id',FilmController.UpdateFilm);
router.delete('/delete/:id',FilmController.DeleteFilm);

module.exports = router;