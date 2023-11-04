require('dotenv').config()
const express = require('express')
const bodyPaser = require('body-parser')
const mongoose = require('mongoose')
const connectDB = require('./config/db') 
const Dispatch = require("./models/dispatch");
const dispatchSkema = require("./validations/dispatch");
const router = require('./routes/dispatch')


const app = express()
const sgMail = require('@sendgrid/mail')
const port = 8908

// Parse incoming requests
app.use(bodyPaser.json())


app.get('/', (req, res) => {
    res.send({message: 'welcome, we are fameely' })
})

app.listen(port, () => {
    console.log(`This server is listening on port ${port}`)
})