const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./authController');

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/pincode', authMiddleware, controller.createPinCode)
router.post('/refresh', controller.refresh)
router.post('/check-pincode', authMiddleware, controller.checkPinCode)

module.exports = router;