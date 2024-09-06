import express from 'express'
import bodyParser from 'body-parser'
import { town} from '../model/index.js'

const townRouter = express.Router()

townRouter.use(bodyParser.json())

townRouter.get('/', (req, res) => {
    town.fetchTravelling(req, res)
})
export{
    townRouter,
    express
}