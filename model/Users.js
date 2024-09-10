import { connection as db } from '../Config/index.js';
import { createToken} from '../middleware/AuthenticateUser.js'
import { compare, hash} from 'bcrypt'

class Users {
    fetchUsers(req, res) {
        try {
            const strQry = `
                SELECT *
                 FROM Users;
                `;
            db.query(strQry, (err, results) => {
              if (err) throw new Error(`Unable to fetch all users`);
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

fetchUser(req, res) {
    try {
        const strQry = `SELECT userID, firstName, lastName, email, gender, age, pwd
                FROM Users
                WHERE userID = ${req.params.id};`
    
        db.query(strQry, (err, result) => {
          if (err) throw new Error(" Unable to fetch the user☹️");
          res.json({
            status: res.statusCode,
            result: result[0],
          })
        })
      } catch (e) {
        res.json({
          status: 404,
          msg: e.message,
        });
    }
}
async registerUser(req, res) {
    try {
        let data = req.body;
        data.pwd = await hash(data.pwd, 12);
        // Payload
        let user = {
        emailAdd: data.emailAdd,
          pwd: data.pwd,
        };
        let strQry = `INSERT INTO Users 
                    SET ?`;
    
        db.query(strQry, [data], (err) => {
          if (err) {
            res.json({
              status: 400,
              msg: 'Unable to register a user',
            });
          } else {
            const token = createToken(user);
            res.json({
              token,
              msg: "Successfully registered",
            });
          }
        });
      } catch (e) {
        res.status(500).json({
          err: "An error occured during registration",
        });
      }
}
async updateUser(req, res) {
    try {
        let data = req.body;
        if (data.pwd) {
          data.pwd = await hash(data.pwd, 12);
        }
        const strQry = `
            UPDATE Users 
            SET ?
            WHERE userID = ${req.params.id}
            `;
        db.query(strQry, [data], (err) => {
          if (err) throw new Error("Unable to update a user");
          res.json({
            status: res.statusCode,
            msg: "The user record was updated",
          });
        });
      } catch (e) {
        res.json({
          status: 400,
          err: e.message,
        });
      }
}
deleteUser(req, res) {
    try {
        const strQry = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        
        `
        db.query(strQry, (err) => {
            if (err) throw Error('Unable to delete the user')
                res.json({
                    status: res.statusCode,
                    msg: 'A user\'s information was removed.'
                })
        })
    }catch (e) {
        res.json({
            status: 404,
            err: e.message
        })
    }
}
 async login(req, res) {
    try {
        const { email, pwd} = req.body
        const strQry = `
        SELECT *
        FROM Users
        WHERE email = '${email}';
        `
        db.query(strQry, async (err, results) => {
            if (err) throw new Error ('Invalid login details')
                if (!results?.length) {
                    res.json({
                        status: 401,
                        msg: 'You provided a wrong email',
                        results
                    })
                } else {
                    const isValidPass = await compare(pwd, results[0].pwd)
                    if (isValidPass) {
                        const token = createToken({
                            email,
                            pwd
                        })
                        res.json({
                            status: res.statusCode, 
                            token,
                            results: results[0]
                        })
                    } else {
                        res.json({
                            status: 401,
                            msg: 'Invalid password or you have not registered'
                        })
                    }
                }
        })
    } catch (e) {
        res.json({
            status: 404,
            err: e.message
        })
    }
 }
}

export {
    Users
}