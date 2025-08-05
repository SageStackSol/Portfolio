const mongoose = require('mongoose');
 const clientSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    mobileNo: {
        type : Number,
        required: true
    },
    email:{
        type : String,
        required: true
    }
 })

 module.exports = mongoose.model('client-info', clientSchema)