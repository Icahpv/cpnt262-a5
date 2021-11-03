
/*****************/
/* Define routes */
/*****************/

const { application } = require("express")

const express = require('express')
const app = express()

// List entry route
app.get('/api/quote', function(request, response) {

  if (typeof quote !== 'undefined' && Array.isArray(quote)) {
    // Variable is an array!
    response.send(quote)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }

})

// Item route
app.get('/api/quote/:id', function(request, response) {
  let quotes

  if (typeof quote !== 'undefined' && Array.isArray(quote)) {
    quotes = quote.find(item => request.params.name === item.name) // Use Array.find() here
  } else {
    quotes = null;
  }
  
  if (typeof quotes === 'object' && quotes !== null) {
    response.send(quotes)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }
})
