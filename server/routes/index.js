const Router = require('express');
const router = new Router();
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const vendorRouter = require('./vendorRouter');
const folderRouter = require('./folderRouter');



router.use('/user', userRouter)
router.use('/folder', folderRouter)
router.use('/vendor', vendorRouter)
router.use('/device', deviceRouter)

module.exports = router;