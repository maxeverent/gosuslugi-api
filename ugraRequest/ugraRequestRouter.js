const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./ugraRequestController');

router.get('/get-bank', authMiddleware, controller.getBanks)
router.get('/get', authMiddleware, controller.getRequests)
router.get('/get/:id', authMiddleware, controller.getRequestById)
router.get('/get-status', authMiddleware, controller.getRequestStatus)
router.post('/add', authMiddleware, controller.addRequest)

module.exports = router;