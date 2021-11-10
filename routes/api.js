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

    res.send(data)
})

// Item route
router.get('/quotes/:id', async(req, res) => {

  try {
    let data = await quote.findOne({ id: req.params.id }) // Finds the id in quo
    if (!data) {
      throw new Error()
    }
    res.send(data)
  } catch(err) {
    res.send({error: 'Quote not found'})
  }

})

module.exports = router // data from gallery.js