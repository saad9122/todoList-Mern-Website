const jwt = require('jsonwebtoken')


const JWT_SECRET = process.env.JWT_SECRET

const generateToken = (id) => {

    return jwt.sign({id} ,JWT_SECRET,{
        expiresIn: "3d"
    })
}

const authToken = (req,res,next) => {

    const authHeader = req.headers['authorization']
    
    const stringToken = authHeader && authHeader.split(' ')[1]

    const token = stringToken.replace(/"/g, '')
 
    if(!token) {

        return res.status(401).json({error: "Unauthorized"})
    }

    jwt.verify(token,JWT_SECRET,(err,user) => {

        if(err) {
            return res.status(403).json({error:"Invalid Token"})
        }

        req.user = user
        req.token = token
        next();
    })
}

module.exports = {generateToken,authToken}


