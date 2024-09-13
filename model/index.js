import { Users} from "./Users.js";
import { Offices} from "./Offices.js";
import { Cities} from "./Cities.js"
import { Town } from "./Town.js"
import { Bookings} from "./Bookings.js"


const users = new Users()
const offices = new Offices()
const cities = new Cities()
const town = new Town()
const bookings = new Bookings()

export {
    users,
    offices,
    cities,
    town,
    bookings
}