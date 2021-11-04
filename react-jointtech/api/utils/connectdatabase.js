const mongoose = require('mongoose');
const uriString = process.env.MongoDBURI;
const connect = mongoose.connect(uriString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
connect
    .then(database => {
        console.log("MongoDB Connected")
    })
    .catch(err => {
        console.log(err);
    })