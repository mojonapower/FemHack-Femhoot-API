const jwt = require('jsonwebtoken');


const verifyToken= (req,res,next) =>{
    //headers in the token
     const token = req.header('Authorization');
    if(!token) return res.status(400).json('ACCESS DENIED');
    try {
        const decoded = jwt.verify(token, process.env.JWT_KEY)
    
        /* we assign req.user to access the user */
        req.user = decoded;
        next()      
    } catch (error) {
        /* if an error occurs we do this */
        return res.status(400).json('ACCESS DENIED'); 
    }
  
}


exports.verifyToken = verifyToken;