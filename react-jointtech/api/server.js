const express = require('express');
const cors = require('cors');
const port = 3030;
const mongoose = require('mongoose');
const User = require('./models/user')
const bcrypt = require('bcrypt')
const userRouter = require("./routes/users")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRouter)


mongoose.connect("mongodb+srv://jointtechuser:csc342@cluster0.1fcfm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
    app.listen(port, () => console.log(`Server is live http://localhost:${port}`))
})
.catch(err => console.log(err))






module.exports = app;