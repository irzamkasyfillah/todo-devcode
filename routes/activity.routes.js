const express = require('express')
const router = express.Router()
const activityController = require('../controllers/activity.controller')

//get all
router.get('/', activityController.findAll)

router.get('/:id', activityController.findOne)

router.post('/', activityController.create)

router.put('/:id', activityController.update)

router.delete('/:id', activityController.deleteOne)

module.exports = router