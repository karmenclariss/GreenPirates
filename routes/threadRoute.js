const express = require('express');
const router = express.Router()
const Thread = require('../models/threadModel')

router.route('/create').post((req,res) =>{
    console.log(req.body);
    const title = req.body.title
    const content = req.body.content
    const newThread = new Thread({
        title,
        content
    })
    newThread.save()
})

router.route('/threads').get((req,res) =>{
    Thread.find()
        .then(foundThread => res.json(foundThread))
})

router.route('/threads/:id').get((req,res) =>{
    const id = req.params.id
    Thread.findById(id, (err,thread) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log(thread)
            res.json(thread)
        }
    })
})

module.exports = router
