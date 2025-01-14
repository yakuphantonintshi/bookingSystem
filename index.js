import { userRouter, express, bookingsRouter } from "./Controller/UserController.js";
import { cityRouter} from "./Controller/DepartureController.js"
import { townRouter} from "./Controller/TravellingController.js"

import {freestateRouter, gautengRouter, KznRouter, northenRouter, officeRouter, westernRouter } from "./Controller/OfficeController.js";
import path from "path";
import cors from 'cors'

// Create an express app
const app = express();
const port = +process.env.PORT || 4000;


// Middleware
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Methods", "*");
//     res.header("Access-Control-Request-Methods", "*");
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header("Access-Control-Expose-Headers", "Authorization");
//     next()
// })

app.use(cors({
  origin: '*',
  credentials: true,
  methods: '*',
  allowedHeaders: '*',
  exposedHeaders: ['Authorization']
}));


app.use('/users', userRouter )
app.use('/eastern', officeRouter )
app.use('/freestate', freestateRouter )
app.use('/gauteng', gautengRouter )
app.use('/kzn', KznRouter )
app.use('/northern', northenRouter )
app.use('/western', westernRouter )
app.use('/departure', cityRouter)
app.use('/travelling', townRouter)
app.use('/bookings', bookingsRouter)

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
