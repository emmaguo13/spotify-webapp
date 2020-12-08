const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//const options = {collection: "rates"}

//example
let User = new Schema({
        spotifyId: {
            type: String
        },
        accessToken: {
            type: String
        },
        refreshToken: {
            type: String
        }
    },
)

module.exports = mongoose.model('User', User)