const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT || 3000

//=======================
const FilmRouter = require("./Routes/FilmRoute");
const ReviewRatingRouter = require('./Routes/ReviewsRatingRoute');
const UserRouter = require('./Routes/UserRoute');
const TrendingRouter = require('./Routes/SearchHistoryRoute');
//=======================

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/movie-hub').then(()=>{
    console.log('MongoDB Connected...');
}).catch(err=>{
    console.error(err);
});

//=========================
app.use('/v1/Movies',FilmRouter);
app.use('/v1/review-ratings',ReviewRatingRouter);
app.use('/v1/user',UserRouter);
app.use('/v1/trending',TrendingRouter);
//=========================

app.listen(PORT,()=>{
    console.log(`Server is running on port: ${PORT}`);
})
