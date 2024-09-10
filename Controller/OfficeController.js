import express from 'express'
import bodyParser from 'body-parser'
import { offices} from '../model/index.js'
import { verifyToken } from '../middleware/AuthenticateUser.js'

const officeRouter = express.Router()
const freestateRouter = express.Router()
const gautengRouter = express.Router()
const KznRouter = express.Router()
const northenRouter = express.Router()
const westernRouter = express.Router()

officeRouter.use(bodyParser.json())

officeRouter.get('/',verifyToken, (req, res) => {
    offices.fetchEastern(req, res)
})
freestateRouter.get('/',verifyToken, (req, res) => {
    offices.fetchFreestate(req, res)
})
gautengRouter.get('/',verifyToken, (req, res) => {
    offices.fetchGauteng(req, res)
})
KznRouter.get('/',verifyToken, (req, res) => {
    offices.fetchKzn(req, res)
})
northenRouter.get('/',verifyToken, (req, res) => {
    offices.fetchNorthern(req, res)
})
westernRouter.get('/',verifyToken, (req, res) => {
    offices.fetchWestern(req, res)
})

export{
    officeRouter,
    freestateRouter,
    westernRouter,
    northenRouter,
    KznRouter,
    gautengRouter,
    express
}