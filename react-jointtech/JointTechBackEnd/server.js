const express = require('express')
const app = express()

// Will allow us to configures so we can have environment variables in the .env file
app.use(express.static('www'))

// Creates our express server and the port that we will host it on. 
const port = process.env.PORT || 5000;

// this is a view engine for viewing webpages

// will allow us to parse JSON info
app.use(express.json());

//This is the root path
app.get('/', (req, res) => {
   console.log("Here")
   res.sendFile("react-jointtech/src/www/index.html")
})

const userRouter = require('./routes/signup')
const eventRouter = require('./router/events')
// Allows us to grab endpoints from signup to access different routes
app.use('/signup', userRouter)
app.use('/events, ')

// This is what will start the server on the port. Type "nodemon server" to run 
app.listen(port, () => {
   console.log(`Server is listening on port ${port}`)
})

