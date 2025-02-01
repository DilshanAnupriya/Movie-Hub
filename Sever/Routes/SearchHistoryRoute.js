const express = require('express');
const router = express.Router();
const SearchController= require('../Controller/SearchHistoryController');

router.post('/log-search', SearchController.logSearch);
router.get('/list',SearchController.trendingList);

module.exports = router;

