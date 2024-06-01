const authMiddleware = require('../middlewares/authMiddleware')

const Router = require('express')

const router = new Router()

const controller = require('./diaryController');

router.get('/get-school', authMiddleware, controller.getSchool)
router.get('/get-period', authMiddleware, controller.getPeriod)
router.get('/get-children', authMiddleware, controller.getChildren)
router.get('/get-schedule', authMiddleware, controller.getSchedule)
router.get('/get-grades-list', authMiddleware, controller.getGradesList)
router.get('/get-result', authMiddleware, controller.getResultByPeriod)
router.get('/get-diary', authMiddleware, controller.getDiary)

module.exports = router;