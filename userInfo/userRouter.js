const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./userController');

router.get('/get', authMiddleware, controller.getUserData)

module.exports = router;