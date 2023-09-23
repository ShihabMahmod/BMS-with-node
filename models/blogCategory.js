const mongoose = require('mongoose');

const blogCategory =  mongoose.Schema({

    name : {
        type :String,
        required : true
    },
    status : {
        type : Boolean,
        required : true
    },

});
 
module.exports = mongoose.model('blogCategory',blogCategory);