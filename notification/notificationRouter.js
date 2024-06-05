const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./notificationController');

router.get('/get', authMiddleware, controller.getNotifications)

module.exports = router;