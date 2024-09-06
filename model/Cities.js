import { connection as db } from '../Config/index.js';

class Cities {
    fetchDeparture(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM departure;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the cities☹️`);
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
    Cities
}