import { Request, Response, Router } from "express"
import * as twitter from 'twitter-node-client'
const path = require("path")

const router : Router = Router()

router.get('/', (req: Request, res:Response)=>{
    res.sendFile(path.join('/index.html'))
})
router.get('/tweets_list', (req: Request, res:Response)=>{
    res.send('Lista de Tweets')
})

export const routes = router