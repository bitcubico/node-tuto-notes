const { Router } = require('express');
const httpStatus = require('http-status-codes');
const userController = require('../controllers/user.controller');
const router = Router();

router.get('/', userController.all);

router.post('/', userController.create);

router.put('/:id', userController.update);

router.patch('/:id/change-password', userController.updatePassword);

router.delete('/:id', userController.remove);

module.exports = router;