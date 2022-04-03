const express = require('express');
const router = express.Router()
const Thread = require('../models/threadModel')


router.route('/createThread').post((req,res) =>{    
    const title = req.body.title
    const content = req.body.content
    const newThread = new Thread({
        title,
        content
    })
    newThread.save()
})

router.route('/getThread').get((req,res) =>{
    Thread.find()
        .then(foundThread => res.json(foundThread))
})

router.route('/:id').get((req,res) =>{
    const id = req.params.id
    Thread.findById(id, (err,thread) =>{
        if(err){
            console.log(err)
        }
        else{
            res.status(200).json(thread)
        }
    })
})

module.exports = router
