import { Request, Response, Router } from "express";
import * as twitter from 'twitter-node-client'

const router : Router = Router()

router.get('/', (req: Request, res:Response)=>{
    res.render('../public/dist/index.html')
})
router.get('/tweets_list', (req: Request, res:Response)=>{
    res.send('Lista de Tweets')
})

export const routes = router