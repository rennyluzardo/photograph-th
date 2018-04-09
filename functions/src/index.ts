import * as functions from 'firebase-functions'
import * as express from 'express'
import { Router, Request, Response } from 'express'

const Twitter = require('twitter-node-client').Twitter
const app: express.Application = express()
const router: Router = Router()

const config = {
    consumerKey: "bZVyVqbW1TCN3oNNAwuZE12Uc",
    consumerSecret: "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
    accessToken: "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
    accessTokenSecret: "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
    callBackUrl: ""
}
const twitter = new Twitter(config)

router.use('/gettweets', (request: Request, response: Response) => {
    twitter.getUserTimeline({ screen_name: '_luzardorenny' }, error => response.json(error), twts => response.send(twts))
})
app.use("/", router)
export const api = functions.https.onRequest(app)