const passport = require("passport");
const LocalStrategy = require("passport-local");
const mongoose = require("mongoose");
const users = require("../models/users");
const User = mongoose.model("users");

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
        },
        async(username, password, done) => {
            const qRequest = await User.findOne({email: username}).exec();
            // IF username is incorrect
            if (!qRequest) {
                // THEN respond with
                return done(null, false, 
                    {message: "Incorrect username"}
                );
            }
            // IF password is incorrect
            if (!qRequest.validPassword(password)) {
                // THEN respond with
                return done(null, false, 
                    {message: "Incorrect password"}
                );
            }
            return done(null, qRequest);
        }
    )
)