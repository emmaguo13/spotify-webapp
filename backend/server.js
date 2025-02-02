const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4200;
const mongoose = require("mongoose");
//const authRouter = require("./routes/authRouter.js")
//const requestRouter = require("./routes/requestRouter.js")
const login = require("./spotify-OAuth/authorization_code/app.js")
const cookieSession = require('cookie-session')
const passport = require('passport');
require('./passport')
const url = require ('url')

//const exchangeRates = require("./routes/routes") // route!

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const uri = "mongodb+srv://covid19tracker:spotifywebapp@cluster0.xy4tu.mongodb.net/spotify-webapp?retryWrites=true&w=majority"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => {
    console.log("Mongodb first connection failed: " + err.stack);
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

// Routes
//app.use("/auth", authRouter)
//app.use("/results", requestRouter)
//app.use("/", login)

app.use(cookieSession({
  name: 'spotify-auth-session',  
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());
//app.get('/',(req,res)=>{
 // res.send(`Hello world ${req.user.displayName}`)
//})

app.get('/auth/error', (req, res) => res.send('Unknown Error'))
app.get('/auth/spotify',passport.authenticate('spotify'));
app.get('/auth/spotify/callback',passport.authenticate('spotify', { failureRedirect: '/auth/error' }),
function(req, res) {
    res.redirect('/results'
       //query: {
          //"spotifyId": req.body.id, // idk how to get this
        //}
     );
});

//REQUEST ROUTER

app.get('/results' , (req, res) => {
  return res.send(req.user)
  //const authToken = "32920394234"
  //res.header('Authorization', authToken)
  //return this redirect, response will be the client id
  //in the front end, use this client id to call the backend again 
  //return res.redirect(url.format ({
      //pathname:"https://api.spotify.com/v1/me",
  //}) )
  //res.send("hello")
})

app.get('/search', (req, res) => {
  console.log(req.body) //send the spotifyID, accesstoken
  const accessToken = "BQDe1QbV8TGRZEiY5L0mVJc1lYr9nWMJDbRKboxDUMvpsl5hz0pRiC5Q4KY4Hr8XX6f7EfPyqKaaV8sgWlQFxMewAFmXsY1Bs_bIOtUEmdR0WneNa3bY99tZZN0x6lTb9BiHItMDVMGznUoK7nCQxcl9QZg9S-PWbQ"
  res.header('Authorization', `Bearer ${accessToken}`)
  const user_id = "213vld7kfrzxz3seboqv62tcy"
  //redirect + return list of playlists
  return res.redirect(url.format({
      pathname: "https://api.spotify.com/v1/users/" + user_id + "/playlists"
  }))
}) 

app.get('/items', (req, res) => {
  console.log(req.body) //send the playlistID and the authorization toen
  
  //set header: authorization
  res.header('Authorization', req.body.accessToken)
  //set a limit on query fields

  const playlist_id = req.body.playlist_id // tell ethan to pass playlist_id
  //in the front end, aftergetting the playlists, traverse then to collect the items
  // returns all of the tracks front end will traverse the tracks to get their name, make a list that can be used with ibm watson
  return res.redirect(url.format({
      pathname: "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks"
  }))
})


// Listen on Port 4200
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

module.exports = { app }








