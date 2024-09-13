import express from 'express'
import bodyParser from 'body-parser'
import { bookings} from '../model/index.js'

const bookingsRouter = express.Router()

bookingsRouter.use(bodyParser.json())

bookingsRouter.get('/', (req, res) => {
    bookings.fetchBookings(req, res)
})
export{
    bookingsRouter,
    express
}