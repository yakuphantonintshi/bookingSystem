import express from 'express'
import bodyParser from 'body-parser'
import { departure } from '../model/index.js'

const DepRouter = express.Router()

DepRouter.use(bodyParser.json())

DepRouter.get('/', (req, res) => {
    departure.fetchDeparture(req, res)
})

export{
    express,
    DepRouter
}