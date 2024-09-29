const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName :{
        required : [true, "Book name is required"],
        type: String,
        trim : true
    },
    category:{
        required: [true,"Book name is required"],
        type: String,
        trim : true
    },
    rentPerDay:{
        required: true,
        type: Number,
    }
},{
    timeseries: true
});

const Book = mongoose.model('Book', BookSchema);

module.exports= Book;
