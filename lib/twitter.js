const crypto = require('crypto');
const OAuth = require('oauth-1.0a');
const axios = require('axios');

class Twitter {
    constructor(consumerKey, consumerSecret) {
        this.baseUrl = 'http://api.twitter.com/';
        this.token = {};
        let oauth = OAuth({
            consumer: {
                key: consumerKey,
                secret: consumerSecret
            },
            signature_method: 'HMAC-SHA1',
            hash_function(baseString, key) {
                return crypto.createHmac('sha1', key).update(baseString).digest('base64');
            }
        })
    }
}

module.exports = Twitter;