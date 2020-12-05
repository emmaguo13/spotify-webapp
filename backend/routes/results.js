const express = require('express');
require('dotenv').config();

const router = express.Router();
//models here 
//const companyAccount = require("../models/companyAccount")

router.get('/results', (req, res) => {
    return res.status(200).send("hello")
})

//

module.exports = router;