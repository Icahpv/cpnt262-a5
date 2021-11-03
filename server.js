/******************/
/* Import Modules */
/******************/
const { application } = require("express")
const express = require('express')
// const { url } = require('inspector')
const app = express()
const quotes = require('./data/gallery')

/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/quotes', function(request, response) {

  if (typeof quotes !== 'undefined' && Array.isArray(quotes)) {
    // Variable is an array!
    response.send(quotes)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }

})

// Item route
app.get('/api/quotes/:id', function(request, response) {
  let quotesID
  if (typeof quotes !== 'undefined' && Array.isArray(quotes)) {
    quotesID = quotes.find(item => request.params.name === item.name) // Use Array.find() here
  } else {
    quotesID = null;
  }
  
  if (typeof quotesID === 'object' && quotesID !== null) {
    response.send(quotesID)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }
})

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use(function(request, response) {

  // If path starts with `/api`, send JSON 404
  if (request.url.startsWith('/api')) {

    response.status(404)
    response.send({error: 'File Not Found'})

  } else {
  
    // else send HTML 404
    response.status(404)
    response.sendFile(__dirname + "/public/assets/404.html")

  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});