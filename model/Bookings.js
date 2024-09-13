import { connection as db } from '../Config/index.js';

class Bookings {
    fetchBookings(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM bookings;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the bookings☹️`);
          res.json({
            status: res.statusCode,
            results,
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    }


}
export {
    Bookings
}