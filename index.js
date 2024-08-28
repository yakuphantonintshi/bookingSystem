// import express from "express";
// import path from "path";
// import { connection as db } from "./Config/index.js";
// import { createToken } from "./middleware/AuthenticateUser.js";
// import { hash, compare } from "bcrypt";
// import bodyParser from "body-parser";

// import { userRouter } from "./Controller/UserController.js";

// const app = express()
// const port = +process.env.PORT || 4000
// const router = express.Router()

// // Middleware
// app.use(router, express.static('./static'), 
// express.json(), 
// express.urlencoded({
//     extended: true
// }))


// router.use(bodyParser.json());

// router.get('^/$|/booking', (req, res) => {
//     res.status(200).sendFile(path.resolve('./static/html/index.html'))
// })

// // Getting all the users
// // router.get('/users', (req, res) => {
// //     try {
// //         const strQry = `
// //         SELECT userID, firstName, lastName, email, gender,age, pwd 
// //         FROM Users;
// //         `
// //         db.query(strQry, (err, results) => {
// //             if(err) throw new Error (`Unable to fetch all users`)
// //             res.json({
// //                 status: res.statusCode,
// //                 results
// //             })
// //         })
// //     }catch (e) {
// //         res.json({
// //             status: 404,
// //             msg: e.message
// //         })
// //     }
// // })

// // Getting a single user
// // router.get('/user/:id' , (req,res) => {
// //     try{
// //         const strQry = `SELECT userID, firstName, lastName, email, gender,age, pwd 
// //         FROM Users
// //         WHERE userID = ${req.params.id};`

// //         db.query(strQry, (err, result) => {
// //             if (err) throw new Error(' Unable to fetch the user')
// //                 res.json({
// //             status: res.statusCode,
// //             result: result[0]
// //         })
// //         })
// //     } catch (e){
// //         res.json({
// //             status: 404,
// //             msg: e.message
// //         })
// //     }
// //  })
// router.get('*', (req, res) => {
//     res.json({
//         status: 404,
//         msg: 'Resource not found'
//     })
// })

// app.use('/Users', userRouter )
// app.listen(port, () => {
//     console.log(`Server is running on ${port}`);
// })


import { userRouter, express } from "./Controller/UserController.js";
// import { productRouter } from "./controller/ProductController.js";
import path from "path";


// Create an express app
const app = express();
const port = +process.env.PORT || 4000;

// Middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next()
})
app.use('/Users', userRouter )
// app.use('/Products', productRouter)
app.use(
  express.static("./static"),
  express.json(),
  express.urlencoded({
    extended: true,
  })
);

// Endpoint
app.get("^/$|/eShop", (req, res) => {
  res.status(200).sendFile(path.resolve("./static/html/index.html"));
});



app.get("*", (req, res) => {
  res.json({
    status: 404,
    msg: "Resource not found",
  });
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
