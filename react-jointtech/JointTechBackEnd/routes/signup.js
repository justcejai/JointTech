const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
   
})

//Endpoint for users to signup 
router.get('/signup', (req, res) => {
   res.redirect('/')
})




module.exports = router