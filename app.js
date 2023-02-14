const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose')
const Message = require('./models/risteksocial')

mongoose.connect('mongodb://localhost:27017/ristek-social')

const db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error:"))
db.once("open", ()=> {
    console.log("Database connected");
})

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/create', (req,res) => {
    res.render('create')
})

app.post('/create', (req,res) =>{
    console.log(req.body)
    res.send(req.body)
})