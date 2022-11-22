const Router = require('express');
const router = new Router();
const folderController = require('../controllers/folderController')

router.post('/', folderController.create)
router.get('/', folderController.getAll)

module.exports = router;