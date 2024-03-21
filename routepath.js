app.get('/user/abc', (request, response, next) => {
    console.log('the response from this method will be passed to the other method ...')
    next()
  }, (request, response) => {
    response.send('Hello world!')
  })

  



app.get('/user/abc', (request, response) => {
    res.send('Hello world!')
  })

  


app.get('/users/:userId/books/:bookId', (request, response) => {
    response.send(req.params)
  })


//This route path will fit anything that contains the letter "b"
app.get(/b/, (request, response) => {
    response.send('/b/')
  })

//This route path will match acd and abcd.
app.get('/ab?cd', (request, response) => {
    response.send('ab?cd')
})

app.get('/', (request, response) => {
    res.send('root')
  })
  app.get('/faqs', (request, response) => {
    res.send('root')
  })
    

  