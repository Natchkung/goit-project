const express = require('express')
const router = express.Router()

const {
    Create_Baskets,
    Get_Baskets
} = require('../controllers/Basket.Controller')

router.post('/addcart/', Create_Baskets)
router.get('/getcart/:userName', Get_Baskets)




module.exports = router