import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Application } from 'express-serve-static-core'
import { routes } from './routes'

const app: express.Application = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

app.use('/', routes)

let port = 3033
app.listen(port, () => console.log(`Server listen on ${port}`))
