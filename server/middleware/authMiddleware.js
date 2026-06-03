const { verifyToken } = require("../helpers/utils")


const authMiddleware = async(req,res,next)=>{
    try {
        const token =req.cookies

        if(!token['acc_tkn']) return res.status(401).send({message : 'Token missing'})
        
        const decoded = verifyToken(token['acc_tkn'])
        if(!decoded) return res.status(401).send({message : 'Invalidd request.'})
        req.user = decoded
        next()
    } 
    
    catch (error) {
        console.log(error)
    }
}

module.exports = {authMiddleware}