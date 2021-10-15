const express = require('express')
const router = express.Router()

// This route signifies the general event page
router.get('/', (req, res) => {
   
})

// Creates event to the specified users calender
router.post('/createevent', (req, res) => {
   
})


// Gets and posts an event from for the user to view.
// can be used for retrieving the next event as well. 
// user can access previous and next events.
router.get('/:getevent', (req, res) => {
   
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

// Allows users to login with previous created info 
router.get('/login', (req, res) => {

})

module.exports = router