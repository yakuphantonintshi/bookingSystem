import express from 'express'
import bodyParser from 'body-parser'
import { users } from '../model/index.js'
import { bookings } from '../model/index.js'

const userRouter = express.Router()

const bookingsRouter = express.Router()

bookingsRouter.use(bodyParser.json())
userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})

userRouter.get('/single/:id', (req, res) => {
    users.fetchUser(req,res)
})

userRouter.post('/register', (req, res) => {
    users.registerUser(req,res)
})

userRouter.patch('/:id', (req, res) => {
    console.log();
    
    users.updateUser(req,res)
})

userRouter.delete('/:id', (req, res) => {
    users.deleteUser(req,res)
})
userRouter.post('/login', (req, res) => {
    users.login(req,res)
})

// Bookings end points 

bookingsRouter.get('/', (req,res)=>{
    bookings.fetchBookings(req,res)
})

bookingsRouter.get('/:id', (req,res)=>{
    bookings.fetchUserBookings(req,res)
})

bookingsRouter.get('/:id/booking/:bid', (req,res) =>{
    bookings.fetchUserBooking(req,res)
})

bookingsRouter.post('/:id', (req,res)=>{
    bookings.addBooking(req,res)
})

bookingsRouter.patch('/:id/booking/:bid', (req,res)=>{
    bookings.updatUserBooking(req,res)
})

bookingsRouter.delete('/:id/booking/:bid', (req,res) => {
    bookings.delSingleBooking(req,res)
})

bookingsRouter.delete('/:id', (req,res)=>{
    bookings.delBookings(req,res)
})

// userRouter.get("*", (req, res) => {
//     res.json({
//       status: 404,
//       msg: "Resource not found",
//     });
//   });

export{
    express,
    userRouter,
    bookingsRouter
}