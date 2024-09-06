import express from 'express'
import bodyParser from 'body-parser'
import { cities} from '../model/index.js'

const cityRouter = express.Router()

cityRouter.use(bodyParser.json())

cityRouter.get('/', (req, res) => {
    cities.fetchDeparture(req, res)
})
export{
    cityRouter,
    express
}