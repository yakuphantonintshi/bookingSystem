import { connection as db } from '../Config/index.js';

class Bookings {
    fetchBookings(req, res) {
      try {
        const strQry = `
            SELECT * 
            FROM bookedBuses;
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

    fetchUserBookings(req,res){
      try {
        const strQry = `
            SELECT * FROM bookedBuses WHERE userID = ${req.params.id};
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

    fetchUserBooking(req,res){
      try {
        const strQry = `
            SELECT * FROM bookedBuses WHERE userID = ${req.params.id} AND bookingID = ${req.params.bid};
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the bookings☹️`);
          res.json({
            status: res.statusCode,
            results : results[0],
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    }

    addBooking(req,res){
      try {
        console.log(req.body);
        
        const strQry = `
          CALL AddBooking('${req.body.bookingDate}', '${req.body.bookingTime}', ${req.params.id}, ${req.body.departureID}, ${req.body.travellingID});
          `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error();
          res.json({
            status: res.statusCode,
            msg : 'New booking has been added. Arigato😉'
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    }

    updatUserBooking(req,res){
      try {
        const strQry = `
          UPDATE Bookings
          SET ?
          WHERE userID = ${req.params.id} AND bookingID = ${req.params.bid};
          `;
        db.query(strQry,[req.body], (err, results) => {
          if (err) throw new Error(`Unable to update this bookings☹️`);
          res.json({
            status: res.statusCode,
            msg : "This Booking has been updated. Arigato😁",
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

    delSingleBooking(req,res){
      try {
        const strQry = `
          DELETE FROM Bookings WHERE userID = ${req.params.id} AND bookingID = ${req.params.bid};
          `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to delete booking😭`);
          res.json({
            status: res.statusCode,
            msg : 'One booking has been deleted. Arigato😉'
          });
        });
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
      }
    }

    delBookings(req,res){
      try {
        const strQry = `
          DELETE FROM Bookings WHERE userID = ${req.params.id};
          `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to delete all bookings😭`);
          res.json({
            status: res.statusCode,
            msg : 'All bookings have been deleted. Arigato😉'
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