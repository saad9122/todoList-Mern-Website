const {generateToken} = require('../Util/Toke')
const User = require('../model/userSchema')

const signupUser = async (req,res) => {

    try{

        const {firstName,lastName,mail,password,dob,gender}  = req.body.data

        const userExists = await User.findOne({mail:mail})

        if(userExists) {
            res.status(404)
            throw new Error("User already Exists")
        }

        const user = await User.create({
            firstName,
            lastName,
            mail,
            password,    
            dob,
            gender
        })

        if(user) {

            res.status(200).json({

                firstName:user.firstName,
                lastName:user.lastName,
                dob:user.dob,
                gender:user.gender,
                token:generateToken(user._id)
            })
        }

    }catch(err) {
        res.status(500).json(err.message)
    }    
}

const authUser = async(req,res) => {

    try{

        const enteredData = req.body.data;

        const isUser = await User.findOne({mail:enteredData.mail})  
        
        if(isUser && await isUser.matchPassword(enteredData.password)) {
            res.status(200).json(
            {
                firstName:isUser.firstName,
                lastName:isUser.lastName,
                dob:isUser.dob,
                gender:isUser.gender,
                token:generateToken(isUser._id)
            })
        }else {
            res.status(401)
            throw new Error("User not Found")
        }

    }catch(err) {
        res.status(500).json(err.message)
    }
};


const loggedInUser = async(req,res) => {
    
    try{

        const userId = req.user.id
        const token = req.token
        
        const user = await User.findOne({_id: userId})

        res.status(200).json(
            {
                firstName:user.firstName,
                lastName:user.lastName,
                dob:user.dob,
                gender:user.gender,
                token:token
            }
        )

    }catch(err) {
        res.status(500).json(err.message)
    }
}

module.exports = {signupUser,authUser,loggedInUser} 