const express = require('express')
const cors = require('cors')
const app = express()
const jwt = require('jsonwebtoken')

app.use(cors())

const port = 3000
const posts = [
    {
        username: 'harsha',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title : 'Post 2'
    }
]

app.get('/posts',(req,res) => {
    res.json(posts)
})

app.get('/login',(req,res) => {
    // authenticate the user

    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
})

app.listen(port,() => {
    console.log(`Server started on port ${port}`)
})