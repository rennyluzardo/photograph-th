import * as express from 'express'
import * as twitter from 'twitter-node-client'
import { Application } from 'express-serve-static-core'
import { routes } from "../routes/index";
const app: express.Application = express()

app.use('/', routes )

app.listen(1011, 'Photographer TH', ()=>console.log('Server listen on port 1011'))
