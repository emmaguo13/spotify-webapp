const express = require('express');
require('dotenv').config();

const router = express.Router();
const url = require('url')

//check for login

router.get('/', (req, res) => {
    console.log(req.body);
    //const authToken = "32920394234"
    //res.header('Authorization', authToken)
    //return this redirect, response will be the client id
    //in the front end, use this client id to call the backend again 
    //return res.redirect(url.format ({
        //pathname:"https://api.spotify.com/v1/me",
    //}) )
    //res.send("hello")
})

router.get('/search', (req, res) => {
    console.log(req.body) //send the spotifyID
    //set header: authorization

    const user_id = req.body.user_id //tell ethan to pass in user_id 

    //redirect + return list of playlists
    console.log(res.redirect(url.format({
        pathname: "https://api.spotify.com/v1/users/" + user_id + "/playlists"
    })))
}) 

router.get('/items', (req, res) => {
    console.log(req.body)
    
    //set header: authorization
    //set a limit on query fields

    const user_id = req.body.playlist_id // tell ethan to pass playlist_id
    //in the front end, aftergetting the playlists, traverse then to collect the items

    return res.redirect(url.format({
        pathname: "https://api.spotify.com/v1/playlists/" + playlist_id + "/tracks"
    }))
})

module.exports = router;