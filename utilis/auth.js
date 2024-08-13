require('dotenv').config()
const jwt = require('jsonwebtoken')
const secretkey = process.env.SECRET_KEY
const authenticateToken = (req, res, next) => {
    const token = req.headers(['Authorization']).split(' ')[1]
    console.log(token)

    if (!token) {
        console.log('Access is denied, please enter a token')
        res.status(400).json({message: 'Access is denied, please enter a token'})
    }

    try {
        const decodedToken = jwt.verify(token, secretkey )
        console.log(decodedToken)
        req.user = decodedToken
        next()
        return res.status(200).json({message: 'Token decoded successfully', token: token})
    }
    catch(err) {
        console.log(err)
        return res.status(500).json({error: 'Internal server error'})
    }
}
module.exports = {authenticateToken}