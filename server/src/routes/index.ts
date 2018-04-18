import { Request, Response, Router } from "express"

const Twitter = require('twitter-node-client').Twitter

const twtConf = {
    "consumerKey": "bZVyVqbW1TCN3oNNAwuZE12Uc",
    "consumerSecret": "ZDw1SQ2lgsRu6loTR7DvSARUAEmYUeUEiz8CgYNUEZRiAOAUzZ",
    "accessToken": "283903787-GrfcCsBH72pWyDA1YwWx0taKWm3BSEehTNfcUPAk",
    "accessTokenSecret": "5iNUeZpK2MaDMqlKUs4vVc3bGzDrDFyojca3zJLTYtPUz",
    "callBackUrl": ""
}

const twitter = new Twitter(twtConf)
const path = require("path")

const router : Router = Router()

router.get('/', (req: Request, res:Response)=>{
    res.sendFile(path.join('/index.html'))
})
router.get('/tweets_list', (req: Request, res:Response)=>{
    twitter.getUserTimeline({ screen_name: '_luzardorenny'}, error=>res.send(error), success =>res.send(success))
})

export const routes = router