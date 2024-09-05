import { connection as db} from '../Config/index.js'

class Departure {
    fetchDeparture(req, res) {
        try {
            const strQry = `
                SELECT departureID, departureCity
                 FROM departure;
                `;
            db.query(strQry, (err, results) => {
              if (err) throw new Error(`Unable to fetch all users😒`);
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
    Departure
}