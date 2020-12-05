const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//const options = {collection: "rates"}

//example
let accountInfo = new Schema({
        accountName: {
            type: String
        },
        accountPassword: {
            type: String
        },
        accountPersonality: {
            type: []
        },
        accountZodiac: {
            type: String
        }, 
    },
)

module.exports = mongoose.model('exchangeRate', exchangeRate)