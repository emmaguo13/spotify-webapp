const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new SpotifyStrategy({
    clientID: "e30430dda4c544faae0e25c19ebcdf93", // Your client id
    clientSecret: "0347889932ad4e67956189ad81526660", // Your secret
    callbackURL: "http://localhost:4200/auth/spotify/callback"// Your redirect uri
},
function(accessToken, refreshToken, profile, done) {
  return done(null, profile);
}
));