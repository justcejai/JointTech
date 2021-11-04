const passport = require("passport")
const jwt = require("jsonwebtoken")

exports.CookieOptions = {
    httpOnly: true,
    signed: true,
    maxAge: (60 * 60 * 24 * 30) * 1000,
    sameSite: "none",
}

exports.getToken = user => {
    return jwt.sign(user, process.env.JwtSecret, {
        expiresIn: 60*15,
    })
}

exports.getRefreshToken = user => {
    return jwt.sign(user, process.env.RefreshSecret, {
        expiresIn: 60 * 60 * 24 * 30,
    })
}

exports.verifyuser = passport.authenticate("jwt", {session: false})