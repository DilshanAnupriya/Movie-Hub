const Review = require('../Model/ReviewsRatingModel');

const createReview = async (req, res) => {
    try{
        const create = new Review(req.body);
        await create.save();
        return res.status(200).json({message:"success"});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}
const GetAllReview = async (req, res) => {
    try{
        const find = await Review.find().sort({createdAt: -1});
        const count = await  Review.countDocuments();
        return res.status(200).json({message:"success",data:find,count:count});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}
const GetReviewById = async (req, res) => {
    try{
        const selected = await Review.findById(req.params.id);
        if(!selected){
            return res.status(404).json({message:"not found"});
        }
        return res.status(200).json({message:"success",data:selected});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}
const updateReview = async (req, res) => {
    try{
        const update = await Review.findByIdAndUpdate(
            req.params.id,
            req.body,
        {
            new: true
        });
        if(!update){
            return res.status(404).json({message:"not found"});
        }
        return res.status(200).json({message:"success",data:update});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}
const deleteReview = async (req, res) => {
    try{
        const deleted = await Review.findByIdAndDelete(req.params.id);
        if(!deleted){
            return res.status(404).json({message:"not found"});
        }
        return res.status(200).json({message:"success",data:deleted});
    }catch (e){
        return res.status(500).json({error: e.message});
    }
}
module.exports = {
    createReview,GetAllReview,GetReviewById,updateReview,deleteReview
}