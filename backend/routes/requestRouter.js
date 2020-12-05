const express = require('express');
require('dotenv').config();

const router = express.Router();

//check for login
router.get('/loading', (req, res) => {
    console.log(req.body);
    //check login from spotify
    return res.status(200).send("loading")
})

module.exports = router;