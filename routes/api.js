// Import modules

const express = require('express') // Run Express
const router = express.Router() // Connect to `server.js`

// Connect to MongoDB
const mongoose = require('mongoose'); 

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

// Step 1: Schema
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

// Step 2: Model
const quote = mongoose.model('quote', quoteSchema)


// API Dependencies, this is where my local data is stored.
const quotes = require('../project-root/gallery')

// Define routes

// Entry route
router.get('/quotes', async(req, res) => {
  let data = await quote.find() // This finds all data in Atlas.

    if (typeof data !== 'undefined' && Array.isArray(data)) { // Variable is an array!
    res.send(data)

  } else {
    res.status(404)
    res.send({error: 'Quotes Not Found'})
  }
})

// Item route
router.get('/quotes/:id', async(req, res) => {
  let data = await quote.find({ id: req.params.id }) // Finds the id in quotes

    if (typeof data !== 'undefined' && Array.isArray(data)) {

  } else {
    data = null;
  }
  
  if (typeof data === 'object' && data !== null) {
    res.send(data)

  } else {
    res.status(404)
    res.send({error: 'Id Not Found'})
  }
})

module.exports = router // data from gallery.js