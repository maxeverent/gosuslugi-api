const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./mfcController');

router.get('/get', authMiddleware, controller.getMfcRequest)

module.exports = router;