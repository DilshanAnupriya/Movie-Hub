const express = require('express');
const router = express.Router();
const ReviewRatingController= require('../Controller/ReviewsRatingController');

router.post('/create',ReviewRatingController.createReview);
router.get('/get-all',ReviewRatingController.GetAllReview);
router.get('/get-by/:id',ReviewRatingController.GetReviewById);
router.put('/update/:id',ReviewRatingController.updateReview);
router.delete('/delete/:id',ReviewRatingController.deleteReview);

module.exports = router;