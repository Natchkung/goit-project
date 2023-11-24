const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload_image')
    },
    filename: function (req, file, cb) {
      const surname = file.originalname.slice(-4,-1)+file.originalname.slice(-1)
      const uniqueSuffix = Date.now() + '-' + Math.floor(Math.random() * (9999 - 100 + 1) + 100)
      cb(null, 'IMG-'+uniqueSuffix+surname)
    }
  })

exports.upload_product = multer({ storage: storage }).single('image')