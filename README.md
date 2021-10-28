# M1 Project Milestones

## JointTech Decription

JointTech is a website for compiling a list of almost all computer science related events, not only at NC State but across the country. Our goal is to help tech enthusiasts stay organized and up to date with the latest trends in computer science, while also making networking with people who have similar interests even easier, by gathering information about computer science events across several different sites, as well as allowing our users to post events of their own.

## Instructions for Running Applicatoin
* Navigate to ./react-jointtech/src
* In terminal, type command:
```
npm install react-modal
npm start
```
* Application should run on port 3000

## JointTech Components

###### What's done?
* Build Landing Page
* Endpoints mostly completed for signup and login
* Build JointTech Components (In Progress)
###### What's not done?
* Build JointTech Endpoints 
* Connecting to MongoDB

###### Pages of JointTech

| Pages   | Status      | Wireframe
| ------- | -------     | ---------
| Login   | In Progress  | [wireframe](https://postimg.cc/Cdrc4WbT)
| Profile | In Progress  | 
| Event View   | In Progress  | [wireframe](https://postimg.cc/VdSDZDFS)
| Event Calendar | In Progress  | [wireframe](https://postimg.cc/LqSDXRFf)
| Event Swipe   | In Progress  | [wireframe](https://postimg.cc/Y47PQmfr)
| Event Quick View  | In Progress  | [wireframe](https://postimg.cc/TKgQf1Ff)

###### Endpoints of JointTech
* Endpoints for login/signup
```express
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
```
* Endpoints for event navigation
```express
const express = require('express')
const router = express.Router()

// This route signifies the general event page
router.get('/createevent', (req, res) => {
   
})

// Creates event to the specified users calender
router.post('/createevent', (req, res) => {
   
})


// Gets and posts an event from for the user to view.
// can be used for retrieving the next event as well. 
// user can access previous and next events.
router.post('/:getevent', (req, res) => {
   
}) 

// removes an event from the calender 
router.delete('/:removeevent', (req, res) => {
   
}) 

// For adding already created events to calender
router.put('/:updateeventtype', (req, res) => {
   
}) 

// Adds the event to the library
router.get('/:addevent', (req, res) => {
   
})

router.post('/:addevent', (req, res) => {
   
})
```
