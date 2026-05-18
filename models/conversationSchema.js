const mongoose = require('mongoose')

const convSchema = new mongoose.Schema({
    creator : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref: 'user'
    },
    participant : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : true
    },
    lastMessage : {
        type : String ,
        default : null
    }
})

module.exports = mongoose.model('convSchema',convSchema)