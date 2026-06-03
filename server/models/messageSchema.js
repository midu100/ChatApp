const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    contentType : {
        type : String,
        default : 'text',
        enum : ['text','image','voice','video'],
        required : true
    },
    content : {
        type : String,
        required : true
    },
    sender : {
        type : mongoose.Types.ObjectId,
        ref:'user',
        required : true
    },
    conversation : {
        type : mongoose.Types.ObjectId,
        ref: ' convSchema',
        required : true
    },
})

module.exports = mongoose.model('msgSchema',messageSchema)