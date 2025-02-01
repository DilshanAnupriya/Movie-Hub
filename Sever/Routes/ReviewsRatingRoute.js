const express = require('express');
const router = express.Router();
const ReviewRatingController= require('../Controller/ReviewsRatingController');
const verifyToken= require('../middleware/Auth');


router.post('/create',verifyToken(['admin','user']),ReviewRatingController.createReview);
router.get('/get-all',verifyToken(['admin','user']),ReviewRatingController.GetAllReview);
router.get('/get-by/:id',verifyToken(['admin','user']),ReviewRatingController.GetReviewById);
router.put('/update/:id',verifyToken(['admin']),ReviewRatingController.updateReview);
router.delete('/delete/:id',verifyToken(['admin']),ReviewRatingController.deleteReview);

module.exports = router;