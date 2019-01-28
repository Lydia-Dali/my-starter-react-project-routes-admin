var express = require('express');
var router = express.Router();
const tagsController = require('../controllers/tagsController')

/* GET tags listing. */
router.get('/', tagsController.index);

/* GET tag by id. */
router.get('/:id', tagsController.show);

/* POST new tag. */
router.post('/create', tagsController.create);

/* PUT edit tag. */
router.put('/edit/:id', tagsController.edit);

/* DELETE existing tag. */
router.delete('/:id', tagsController.delete);


module.exports = router;
