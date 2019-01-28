const express = require('express');
const router = express.Router();
const mediasController = require('../controllers/mediasController');

// Require and setup uploader to keep files in uploads folder
const multer  = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage })

/* GET medias listing. */
router.get('/', mediasController.index);

/* GET media by id. */
router.get('/:id', mediasController.show);

/* POST new media. multer create an object, we can access it with req.file */
router.post('/create', upload.single('file'), mediasController.create);

/* PUT edit media. */
router.put('/edit/:id', mediasController.edit);

/* DELETE existing media. */
router.delete('/:id', mediasController.delete);

module.exports = router;
