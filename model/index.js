import { Users} from "./Users.js";
import { Offices} from "./Offices.js"
import { Departure} from "./Departure.js"


const users = new Users()
const offices = new Offices()
const departure = new Departure()

export {
    users,
    offices,
    departure
}