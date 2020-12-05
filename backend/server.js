const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4200;
const mongoose = require("mongoose");
const authRouter = require("./routes/authRouter.js")
const requestRouter = require("./routes/requestRouter.js")

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
app.use("/auth", authRouter)
app.use("/", requestRouter)

// Listen on Port 4000
app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

module.exports = { app }








