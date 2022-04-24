const {Router} = require('express')
const {uploadImage, } = require('../controllers/upload.controller')
const router = Router()
const multer = require('multer')

const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname + '../../../upload')
    },
    filename: function (req, file, cb) {
      //console.log(req.body)
      cb(null, file.originalname)
    }
})
const upload = multer({
  dest: './upload',
  storage: fileStorage
})

// /api/upload/upload-image
router.post('/uploadImage', upload.single( 'file' ), uploadImage)

module.exports = router
