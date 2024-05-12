const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./locationController');

router.get('/get-city', authMiddleware, controller.getCities)
router.get('/get-municipality', authMiddleware, controller.getMunicipality)

module.exports = router;