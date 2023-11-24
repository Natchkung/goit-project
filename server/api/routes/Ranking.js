const express = require('express')
const router = express.Router()

const {
    Ranking,
} = require('../controllers/Ranking.Controller')


//http://localhost:5000/api/product
router.get('/Ranking', Ranking)




module.exports = router