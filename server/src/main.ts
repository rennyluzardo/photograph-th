import * as express from 'express'
import { Application } from 'express-serve-static-core'
import { routes } from './routes'

const app: express.Application = express()

app.use(express.static(__dirname + '/public'))

app.use('/', routes)

let port = process.env.PORT || 3030
app.listen(port, () => console.log(`Server listen on ${port}`))
