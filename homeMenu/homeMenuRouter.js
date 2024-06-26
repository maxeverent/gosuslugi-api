const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./homeMenuController');

router.get('/get', authMiddleware, controller.getHomeMenuData)

module.exports = router;