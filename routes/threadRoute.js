const express = require('express');
const { route } = require('express/lib/application');
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

module.exports = router
