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
    clientID: "", // Your client id
    clientSecret: "", // Your secret
    callbackURL: "http://localhost:4200/auth/spotify/callback"// Your redirect uri
    //passReqToCallback: true
},
function( accessToken, refreshToken, profile, done) {
    console.log(profile.id)
    const send = {
        "profile": profile,
        "accessToken": accessToken
    }
    return done(null, send)

}
));


 //return User.find({where: {spotifyId: profile.id}})
      //.then(foundUser => (foundUser
        //?  done(null, profile)
        //: User.create({spotifyId: profile.id, accessToken: accessToken, refreshToken: refreshToken})
          //.then(done(null, profile))
      //))
      //.catch(done)