
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');

// Connect to mongoDB & dotenv

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

/*****************/
/* Define Schema */
/*****************/

const quoteSchema  = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  linkURL: String,
  credit: String,
  creditURL: String
})

/*****************/
/* Compile Model */
/*****************/

const quote = mongoose.model('quote', quoteSchema)


/****************************/
/* Include API dependencies */
/****************************/

const quotes = require('../project-root/gallery')

/*****************/
/* Define routes */
/*****************/

// List entry route
router.get('/quotes', (req, res) => {
  if (typeof quotes !== 'undefined' && Array.isArray(quotes)) {
    // Variable is an array!
    res.send(quotes)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})

// Item route
router.get('/quotes/:id', (req, res) => {
  let quotesID
  if (typeof quotes !== 'undefined' && Array.isArray(quotes)) {
    quotesID = quotes.find(item => req.params.name === item.name) // Use Array.find() here
  } else {
    quotesID = null;
  }
  
  if (typeof quotesID === 'object' && quotesID !== null) {
    res.send(quotesID)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})

module.exports = router