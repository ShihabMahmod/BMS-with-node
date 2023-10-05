
const mongoose = require('mongoose');

const blog = mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    imagee : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('blog',blog);