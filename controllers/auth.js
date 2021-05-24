const db = require('../util/database');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res, next) => {

    const email = req.body.email;
    const password = req.body.password;
    let loggedInUser = null;


    try {

        let result = await db.execute('SELECT * FROM users where users.email = ?', [email]);

        if(result[0][0]) {
           let loggedInUser = result[0][0];

            if (loggedInUser.password === password) {

                    const token = jwt.sign(
                        {
                          email: loggedInUser.email,
                          userId: loggedInUser.id
                        },
                        'somesupersecretsecret',
                        { expiresIn: '1h' }
                      );

                      res.status(200).json({
                          success: true, 
                          idToken: token,
                          userId: loggedInUser.id,
                          email: loggedInUser.email,
                          expiresIn: 43200
                      });
            } else {
                res.status(201).json({success: false, error: null, message: 'Invalid Password'});
            }

        } else {
            res.status(201).json({ success: false, message: 'User not found'});

        }


    } catch (e) {
        res.status(201).json({ success: false, error: e });
    }

}

