const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../Model/UserModel');
const Review = require("../Model/ReviewsRatingModel");
const  jwt_secret = process.env.JWT_SECRET;


const SignUp = async (req,res) =>{
    const {username, password,email,fullName,role} = req.body;
    const userExist =  await User.findOne({username});
    if(userExist){
        return res.status(400).json({message:"User already exist"});
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = new User({
            username,
            password: hash,
            role,
            email,
            fullName,
            isActive:true
        });
        await user.save();
        res.status(200).json({message:"User saved successfully"});
    }catch (e){
        res.status(500).json({message:"Something went wrong"});
    }
}

const login = async (req,res) =>{
    const {username, password} = req.body;
    const userExist = await User.findOne({username});
    if(!userExist){
        return res.status(400).json({message:"User not exist"});
    }
    const match = await bcrypt.compare(password, userExist.password)
    if(!match){
        return res.status(400).json({message:"User password does not match"});
    }
    const payload ={userId:userExist._id,username:userExist.username,role:userExist.role}
    const token = jwt.sign(payload,jwt_secret,{expiresIn:'1h'});
    res.status(200).json({message:"User successfully logged in",data:{token:token}});
}

const GetAllUsers = async (req, res) => {
    try{
        const { searchText = '', page = 1, size = 10 } = req.query;
        const filter =
               searchText ? {
                    $or: [
                        { fullName: { $regex: searchText, $options: 'i' } },
                        { email: { $regex: searchText, $options: 'i' } },
                        { username: { $regex: searchText, $options: 'i' } }
                    ]
                } : {};
        const find = await User.find(filter).sort({createdAt: -1});
        const count = await  User.countDocuments();
        return res.status(200).json({message:"success",data:find,count:count});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}

module.exports = {
    SignUp,login,GetAllUsers
}