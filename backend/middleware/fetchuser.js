var jwt = require('jsonwebtoken');
const JWT_SECRET = 'itsasecret';
const fetchuser = (req, res, next) => {
    const token = req.header('auth-token'); // jwt token
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        // verification and saving user details in req
        const data = jwt.verify(token, JWT_SECRET); 
        req.user = data.user; 
        next(); 
    } catch (error) {
        res.send(401).send({ error: "Some error ocurred in authentication" });
    }

}

module.exports = fetchuser;