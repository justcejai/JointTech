const express = require('express');
const users = require('./routes/users');
const cors = require('cors');
const port = 3000;
const mongoose = require('mongoose');
const passport = require('passport')
const cookieParser = require('cookie-parser')

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const app = express();
app.use(express.json());
app.use(cookieParser(process.env.CookieSecret));

require("./utils/connectdatabase")
require("./strategies/JwtStrategy")
require("./strategies/LocalStrategy")
require("./strategies/authenticate")

const userRouter = require("./routes/users")

var corsOption = {
    origin: function(origin, callback) {
        if (!origin) {
            callback(null,true)
        } else {
            callback(new Error("Not allowed by CORS"))
        }

    },
    credentials: true,
};



app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

app.use(passport.initialize())
app.use('/api/users', userRouter)

app.get("/", function(req,res) {
    res.send({status: "success"})
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});

module.exports = app;