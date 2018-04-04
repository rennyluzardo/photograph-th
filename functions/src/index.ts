import * as functions from 'firebase-functions';
import * as express from 'express'

const Twitter = require('twitter-node-client').Twitter
const app = express()

const config = {
    "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
    "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
    "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
    "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
    "callBackUrl": "http://localhost:5001/photographer-th/us-central1/api/"
}
const twitter = new Twitter(config);

app.get('/gettweets', (request, response) => {
    twitter.getUserTimeline({ screen_name: '_luzardorenny' }, error => response.send(error), twts => response.send(twts))
})

export const api = functions.https.onRequest(app);