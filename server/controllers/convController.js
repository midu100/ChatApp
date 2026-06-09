const conversationSchema = require("../models/conversationSchema")
const messageSchema = require("../models/messageSchema")
const userSchema = require("../models/userSchema")

const addNewFriend = async(req,res)=>{
  const {email} = req.body

  try {
    if(email === req.user.email) return res.status(400).send({message : 'Try with annother email'})

    const friend = await userSchema.findOne({email})
    const existingParticipent = await conversationSchema.findOne({
      $or: [
        { creator: req.user._id, participant: friend._id },
        { participant: req.user._id, creator: friend._id },
      ],
    });
    if (existingParticipent) return res.status(400).send({ error: "Already in friend list" });

    const createNewConv = new conversationSchema({
        creator : req.user._id,
        participant : friend.id
    })
    createNewConv.save()

    res.status(200).send({ message: "Friend Added successfylly" });
    
  } 
  catch (error) {
    console.log(error)  
  }

}

const conversationList = async (req,res)=>{
  try {
    const conv = await conversationSchema.find({
      $or : [
        {creator : req?.user?._id},
        {participant : req?.user?._id}
      ]
    }).populate('creator participant','fullName avatar')

    res.status(200).send(conv)


  } 
  catch (error) {
    console.log(error)  
  }
}

const sendMessage = async (req,res)=>{
  try {
    console.log('first')
    const {contentType = 'text',content,conversation} = req.body

    const isExistConv = await conversationSchema.findOne({_id : conversation})
    if(!isExistConv) return res.status(400).send({message : 'Conversation not found'})

    const message = new messageSchema({
      contentType,
      content,
      conversation,
      sender : req?.user?._id
    })
    message.save()
    
    res.status(200).send('sent')
  } 
  catch (error) {
     console.log(error)  
  }
}

const getMessages = async(req,res)=>{
  const {contentType='text',content,conversation} = req.body
  if(!conversation) return res.status(400).send({message : 'Conversation not found'})
  try {
    const messageList = await messageSchema.find({conversation})

    global.io.to(conversation).emit('new_message',messageList)

    res.status(200).send(messageList)
  } 
  catch (error) {
      console.log(error)  
  }
}

module.exports = {addNewFriend,conversationList,sendMessage,getMessages}