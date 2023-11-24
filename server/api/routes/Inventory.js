const express = require('express')
const router = express.Router()

const {
    create_a_db,
    list_all_dbs,
    delete_a_db,
    read_a_product_user,
    read_a_db
} = require('../controllers/Inventory.Controller')

const {upload_product} = require('../Middleware/upload_product')

//http://localhost:5000/api/product
router.post('/create-product', upload_product ,create_a_db)
router.get('/products', list_all_dbs)
router.delete('/products/:itemID/:userName', delete_a_db)
router.get('/products-user/:userName', read_a_product_user)
router.get('/products/:itemID', read_a_db)
// router.post('/CheckcurrentUser', auth, CheckcurrentUser)




module.exports = router