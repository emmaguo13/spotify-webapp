const express = require('express');
require('dotenv').config();

const router = express.Router();

//check for login
router.get('/login', (req, res) => {
    console.log(req.body);
    //check login from spotify
    return res.status(200).send("hello")
})

module.exports = router;