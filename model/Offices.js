import { connection as db } from '../Config/index.js';

class Offices {
    fetchEastern(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM eastern;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    fetchFreestate(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM freestate;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    fetchGauteng(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM gauteng;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    fetchKzn(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM kzn;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    fetchNorthern(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM northern;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    fetchWestern(req, res) {
      try {
        const strQry = `
            SELECT *
             FROM western;
            `;
        db.query(strQry, (err, results) => {
          if (err) throw new Error(`Unable to fetch the office's information`);
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
    Offices
}