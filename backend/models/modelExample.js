const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//const options = {collection: "rates"}

//example
let exchangeRate = new Schema({
        fromCurrency: {
            type: String
        },
        toCurrency: {
            type: String
        },
        exchangeRate: {
            type: Number
        }
    },
    options
)

module.exports = mongoose.model('exchangeRate', exchangeRate)