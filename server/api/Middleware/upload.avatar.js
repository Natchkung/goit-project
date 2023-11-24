const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './upload_avatar')
    },
    filename: function (req, file, cb) {
      const surname = file.originalname.slice(-4,-1)+file.originalname.slice(-1)
      cb(null, 'IMG-'+req.body.username+surname)
    }
  })

exports.upload_avatar = multer({ storage: storage }).single('avatar')