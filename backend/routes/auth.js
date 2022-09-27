const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const JWT_SECRET = 'itsasecret';


// Login 

router.post('/login', [
    body('password','Password cannot be blank').exists(),
], async (req, res) => {
    // checking for error in username and password validation & returning if errors are present
    const errors = validationResult(req); 
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    // else taking username and password from req body
    const { username, password } = req.body;
    try {
        let success=false
        const data = {
            user: {
                id: username
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET); // signing jwt
        success=true;
        res.json({success, authtoken,data}); //response

    } catch (error) {
        res.status(500).send("Some error occured");
    }
})


module.exports = router