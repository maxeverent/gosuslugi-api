const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./userController');

router.get('/get', authMiddleware, controller.getUserData)
router.post('/city/:id', authMiddleware, controller.updateCity)

module.exports = router;