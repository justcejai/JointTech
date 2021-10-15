
// const express = require('express')
// const router = express.Router()
// const bcrypt = require('bcrypt')
// // List of users
// const users = []

// router.get('/', (req, res) => {
//    res.render('signup.ejs')
// })

// //Endpoint for users to signup 
// router.post('/signup', async(req, res) => {
//    try {
//       const hashedPassword = await bcrypt.hash(req.body.password, 10)
//       users.push({
//          id: Date.now().toString(),
//          name: req.body.name,
//          password: hashedPassword
//       })
//       res.redirect('/login')
//    } catch {
//       res.redirect('/')
//    }
//    console.log(users)
// })




// module.exports = router