const conversationSchema = require("../models/conversationSchema")
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

module.exports = {addNewFriend}