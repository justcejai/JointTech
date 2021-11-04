const mongoose = require("mongoose");
const Schema = mongoose.Schema
const passportLocalMongoose = require("passport-local-mongoose")

const Session = new Schema ({
    refreshToken: {
        type: String, 
        default: "",
    },
})

const User = new Schema({
  fullName: {
      type: String,
      default: "",
  },
  fullEmail: {
      type: String,
      default: "",
  },
  authStrategy: {
      type: String,
      default: "local",
  },
  points: {
      type: Number,
      default: 50,
  },
  refreshToken: {
      type: [Session],
  },
})

User.set("toJSON", {
    transform: function(doc, ret, optinos) {
        delete ret.refreshToken
        return ret
    },
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", User)