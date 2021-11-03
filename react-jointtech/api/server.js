const express = require('express');
const app = express();
const users = require('./routes/users');
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
require("dotenv").config();


var corsOption = {
    origin: "http://localhost:3000"
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

mongoose.connect(process.env.MongoDBURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));


    
// Routes 
app.use('/api/users', users);




app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

module.exports = app;