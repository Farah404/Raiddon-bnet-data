const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    const AccessTokenSchema = new Schema({
        clientID: {
            type: String,
    },
        clientSecret: {
            type: String,
    },
        accessToken: {
            type: String,
    },
    });

    const AccessToken = mongoose.model('accessToken',AccessTokenSchema);

    module.exports = AccessToken;
