const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import CORS
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/movie-hub';

const app = express();

// Middleware
app.use(express.json()); // Use built-in Express JSON parser
app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from your frontend
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
}));

// Import Routes
const FilmRouter = require("./Routes/FilmRoute");
const ReviewRatingRouter = require('./Routes/ReviewsRatingRoute');
const UserRouter = require('./Routes/UserRoute');

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected...'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Routes
app.use('/v1/movies', FilmRouter);
app.use('/v1/review-ratings', ReviewRatingRouter);
app.use('/v1/user', UserRouter);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
});
