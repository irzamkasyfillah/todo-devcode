const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.findAll)

router.get('/:id', todoController.findOne)

router.post('/', todoController.create)

router.put('/:id', todoController.update)

router.delete('/:id', todoController.deleteOne)

module.exports = router