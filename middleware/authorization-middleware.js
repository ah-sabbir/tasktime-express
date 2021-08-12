const jwt = require('jsonwebtoken')

module.exports = () => {

    return (req, res, next) => {

        console.log("I'm Authorizated")
        const token = req.headers["authorization"]

        if ( !token ) {
            return res.status(401).send("Sorry Access Denied!")
        }else{
            next()
        }
        
    }
}