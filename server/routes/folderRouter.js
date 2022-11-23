const Router = require('express');
const router = new Router();
const folderController = require('../controllers/folderController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), folderController.create)
router.get('/', folderController.getAll)

module.exports = router;
