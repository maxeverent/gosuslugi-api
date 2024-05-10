const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./carouselController');

router.get('/get', authMiddleware, controller.getCarouselData)

module.exports = router;