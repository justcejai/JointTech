if (process.env.NODE_ENV !== 'production') {
   require('dotenv').config()
}
const express = require('express')
const app = express()
const passport = require('passport')
const port = 3000
const flash = require('express-flash')
const session = require('express-session')
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
app.use(cors());
// Will allow us to configures so we can have environment variables in the .env file
app.use(express.static('www'))
app.use(express.urlencoded({extended:true}));
app.use(flash())
app.use(session({
   secret: process.env.SESSION_SECRET,
   resave: false,
   saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json());
// Allows us to access different routes 
// const signupRouter = require('./routes/signup')
// const eventRouter = require('./routes/events')
// const loginRouter = require('./routes/login')

const initiliaze = require('./passport-info')
initiliaze(
   passport, 
   email => users.find(user => user.email === email), 
   id => users.find(user => user.id === id)
)

// Allows us to grab endpoints from signup to access different routes
// app.use('/signup', signupRouter)
// app.use('/events,', eventRouter)
// app.use('/login', loginRouter)
// Renders out HTML page

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
   console.log("MongoDB connection successfule.");
})

// For encrypting the password 
const bcrypt = require('bcrypt')
// List of users
const users = []

app.get('/signup', (req, res) => {
   res.redirect("/Signup")
})

//Endpoint for users to signup 
app.post('/signup', async(req, res) => {
   // This try block will attemp to collect user info 
   try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
         id: Date.now().toString(),
         name: req.body.name,
         password: hashedPassword
      })
      res.redirect('/Home')
   } catch {
      res.redirect('/Signup')
   }
   console.log(users)
})

app.get('/login', (req, res) => {
   res.redirect("/login")
})  

//Endpoint for users to signup 
app.post('/login', passport.authenticate('local', {
   successRedirect: '/',
   failureRedirect: '/login',
   failureFlash: true
}))

app.delete('/logout', (req, res) => {
  req.logOut()
  req.redirect('/')
})
// This is what will start the server on the port. Type "nodemon server" to run 
app.listen(port)