// const jwt = require('jsonwebtoken')
// var config = require('../config'); // get our config file

// const verifyToken = () => {
//     return (req, res, next) => {
//         const token = req.headers["authorization"]
//         if ( !token ) {
//             return res.status(401).send("Sorry Access Denied!")
//         }
//         next();
//         jwt.verify(token, config.secret, function(err, decoded) {
//             if (err){
//                 return res.status(500).send({ auth: false, message: 'Failed to authenticate token.',error:err });
//             }
//             req.userId = decoded.id;
//             next();
//           });
//     }
// }

var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('../config'); // get our config file

function verifyToken(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.headers["authorization"];
  if (!token) 
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {      
    if (err) 
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' ,error:err});    

    // if everything is good, save to request for use in other routes
    req.user_id = decoded
    next();
  });

}


module.exports = {verifyToken};