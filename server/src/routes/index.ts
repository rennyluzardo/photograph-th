import { Request, Response, Router } from "express"

const Twitter = require('twitter-node-client').Twitter

const twtConf = {
    "consumerKey": "9Iy40Azq1p1eGEO302pTrLl3f",
    "consumerSecret": "PPrEdjiII52jjMADKagf3qDPOWgs6wjNYxKVdKc5irmk0i0svZ",
    "accessToken": "731840353-CFVFg9ra4f18mpuDrE4XHGRPHa5nVEkXfVQNeDux",
    "accessTokenSecret": "cagJmYASdbAB5mOHYN0sDVnvDn2w2gYKRzA3K9VKUsumo",
    "callBackUrl": ""
}

const twitter = new Twitter(twtConf)
const path = require("path")

const router : Router = Router()

router.get('/', (req: Request, res:Response)=>{
    res.sendFile(path.join('/index.html'))
})
router.get('/tweets_list', (req: Request, res:Response)=>{
    twitter.getUserTimeline({ screen_name: 'MemePinta'}, error=>res.send(error), success =>res.send(success))
})

export const routes = router