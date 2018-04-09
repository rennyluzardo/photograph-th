import * as express from 'express'
import * as bodyParser from 'body-parser'
import { Application } from 'express-serve-static-core'

const app: express.Application = express()


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

app.get('/', (request, response)=>{
    response.send('Middleware Route')
})

let port = 3033
app.listen(port, () => console.log(`Server listen on ${port}`))
