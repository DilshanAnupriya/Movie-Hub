const mongoose = require("mongoose");

const ReviewRatingSchema = new mongoose.Schema({
    movie:{
        type:Object,
        required:true
    },
    user:{
        type:Object,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:10
    },
    reviews:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        required:true
    }
});
module.exports = mongoose.model('ReviewRating', ReviewRatingSchema);