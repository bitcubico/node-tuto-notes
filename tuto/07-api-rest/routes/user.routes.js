const { Router } = require('express');
const httpStatus = require('http-status-codes');
const userController = require('../controllers/user.controller');
const router = Router();

router.get('/', userController.getUsers);

router.post('/', userController.postUsers);

router.put('/', userController.putUsers);

router.patch('/', userController.patchUsers);

router.delete('/', userController.deleteUsers);

module.exports = router;