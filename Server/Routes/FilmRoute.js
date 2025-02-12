const express = require('express');
const router = express.Router();
const FilmController= require('../Controller/FilmController');
const verifyToken= require('../middleware/Auth');

router.post('/create',verifyToken(['admin']),FilmController.CreateFilm);
router.get('/get-all',verifyToken(['admin','user']),FilmController.GetAllFilm);
router.get('/get-by/:id',verifyToken(['admin','user']),FilmController.GetFilmById);
router.put('/update/:id',verifyToken(['admin']),FilmController.UpdateFilm);
router.delete('/delete/:id',verifyToken(['admin']),FilmController.DeleteFilm);

module.exports = router;