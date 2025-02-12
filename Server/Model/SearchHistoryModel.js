const mongoose = require("mongoose");

const SearchHistorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    searchCount:{
        type:Number,
        default:1,
        required:true
    },
    latestCountAt:{
        type:Date,
        required:true
    }
});
module.exports = mongoose.model('SearchHistory', SearchHistorySchema);