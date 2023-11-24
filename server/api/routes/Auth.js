const express = require('express')
const router = express.Router()

const {
    login,
    register,
    CheckcurrentUser
} = require('../controllers/Auth.Controller')

const {upload_avatar} = require('../Middleware/upload.avatar')

//http://localhost:5000/api/product
router.post('/login', login)
router.post('/register', upload_avatar ,register)
router.post('/CheckcurrentUser/:userName', CheckcurrentUser)




module.exports = router