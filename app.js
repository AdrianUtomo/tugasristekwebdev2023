const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const axios = require('axios')
const methodOverride = require('method-override')
const morgan = require('morgan')
const Message = require('./models/risteksocial')

mongoose.connect('mongodb://localhost:27017/ristek-social')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"))
db.once("open", ()=> {
    console.log("Database connected");
})

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: true}))

app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})

// API
require('./api/message')(app,Message)
///////////////

// Read Tweets (READ)
app.get('/', async (req,res) => {
    const {data} = await axios.get(`//${req.get('host')}/api/all`)
    const messages = data;
    // const messages = await Message.find({})
    res.render('home', {messages})
})

app.get('/tweet/:id', async (req,res) => {
    const {data} = await axios.get(`//${req.get('host')}/api/${req.params.id}`)
    const message = data;
    // const message = await Message.findById(req.params.id)
    res.render('show', {message})
})
///////////////

// Post Tweet (CREATE)
app.get('/create', (req,res) => {
    res.render('create')
})

app.post('/create', async (req,res) =>{
    const {data} = await axios.post(`//${req.get('host')}/api/create`, {
        content: req.body.content,
        date: req.body.date
      }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    const message = data;
    // const message = new Message(req.body)
    // await message.save()
    res.redirect(`/tweet/${message._id}`)
})
///////////////

// Edit Tweets (UPDATE)
app.get('/tweet/:id/edit', async(req,res) =>{
    const {data} = await axios.get(`//${req.get('host')}/api/${req.params.id}`)
    const message = data;
    // const message = await Message.findById(req.params.id)
    res.render('edit', {message})
})

app.post('/tweet/:id', async(req,res) =>{
    await axios.put(`//${req.get('host')}/api/${req.params.id}`, {
        content: req.body.content,
        date: req.body.date
      }, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    // const {id} = req.params
    // await Message.findByIdAndUpdate(id, {...req.body})
    res.redirect(`/tweet/${req.params.id}`)
})
///////////////

// Delete Tweets (DELETE)
app.delete('/tweet/:id', async (req,res) => {
    await axios.delete(`//${req.get('host')}/api/${req.params.id}`, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
    res.redirect('/')
})
///////////////