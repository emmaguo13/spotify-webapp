const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4200;
const mongoose = require("mongoose");
//const authRouter = require("./routes/authRouter.js")
const requestRouter = require("./routes/requestRouter.js")
const login = require("./spotify-OAuth/authorization_code/app.js")
const cookieSession = require('cookie-session')
const passport = require('passport');
require('./passport')
const url = require ('url')

//const exchangeRates = require("./routes/routes") // route!

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
app.use("/results", requestRouter)
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
    res.redirect(url.format({
       pathname:"/results",
       query: {
          "spotifyId": req.body.id, // idk how to get this
        }
     }));
});

// Listen on Port 4200
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

module.exports = { app }








