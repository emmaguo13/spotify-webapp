const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const User = require('./models/User.js')
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new SpotifyStrategy({
    clientID: "e30430dda4c544faae0e25c19ebcdf93", // Your client id
    clientSecret: "0347889932ad4e67956189ad81526660", // Your secret
    callbackURL: "http://localhost:4200/auth/spotify/callback",// Your redirect uri
    passReqToCallback: true
},
function(profile, accessToken, refreshToken, done) {
    console.log(profile.id)
    User.find({where: {spotifyId: profile.id}})
      .then(foundUser => (foundUser
        ? done(null, foundUser)
        : User.create({spotifyId: profile.id, accessToken: accessToken, refreshToken: refreshToken})
          .then(createdUser => done(null, createdUser))
      ))
      .catch(done)
}
));