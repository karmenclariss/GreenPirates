const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const route = require('./routes/threadRoute')

dbURL = 'mongodb+srv://user:password1!@cluster0.u079k.mongodb.net/forum-app?retryWrites=true&w=majority'

mongoose.connect(dbURL)
 .catch((err) => console.log(err.message))

app.use(cors())
app.use(express.json()) //parse the request coming from the front-end
app.use('/', route)

app.listen(3001, () =>{
        console.log('Server is listening on port 3001');
})