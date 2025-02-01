const mongoose = require('mongoose');

const FilmSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },
    photo:{
        type: String,
        required: true
    },
    trailer:{
        type: String,
        required: true
    },
    ratings:{
        type: Number,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    genres:{
        type: Array,
        required: true
    },
    overView:{
        type:String,
        required: true
    },
    releaseDate:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    companies:{
        type: Array,
        required: true
    },
    language:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Film', FilmSchema);