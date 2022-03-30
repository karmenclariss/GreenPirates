const express = require('express');
const router = express.Router()
const Comment = require('../models/commentModel')

router.route('/createComment').post((req,res) =>{
    console.log(req.body)
    let newComment = new Comment()
    const threadId = req.body.threadId
    const comment = req.body.comment
    if(req.body.responseTo){
        
        const responseTo = req.body.responseTo
        newComment = Comment({
            comment,
            threadId,
            responseTo
        })
    }
    else{
        newComment = Comment({
            comment,
            threadId
        })
    }
    console.log(`The new comment is ${newComment}`)
    newComment.save((err, newComment) =>{
        if(err) return res.json({success:false,err})
        Comment.find({"_id": newComment._id})
        .populate("threadId")
        .populate("responseTo")
        .exec((err,result) =>{
            if(err){
                return res.json({success:false,err})
            }
            return res.status(200).json({success:true,result})
        })
    })
})

router.route('/getComment').post((req,res) =>{
    Comment.find({"threadId": req.body.threadId})
        .populate("threadId")
        .exec((err,comments) =>{
            if(err) return res.json({success:false,err})
            res.status(200).json({success:true,comments})
        })
        
})

module.exports = router