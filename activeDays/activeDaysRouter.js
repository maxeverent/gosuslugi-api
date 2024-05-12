const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./activeDaysController');

router.get('/get', authMiddleware, controller.getActiveDayInfo)

module.exports = router;