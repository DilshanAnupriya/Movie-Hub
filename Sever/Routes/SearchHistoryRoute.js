const express = require('express');
const router = express.Router();
const SearchController= require('../Controller/SearchHistoryController');
const verifyToken= require('../middleware/Auth');
router.post('/log-search',verifyToken(['user']), SearchController.logSearch);
router.get('/list',verifyToken(['admin','user']),SearchController.trendingList);

module.exports = router;

