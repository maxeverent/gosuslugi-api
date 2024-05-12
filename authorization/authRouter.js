const Router = require('express')

const router = new Router()

const controller = require('./authController');

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.post('/pincode', controller.createPinCode)
router.post('/refresh', controller.refresh)

module.exports = router;