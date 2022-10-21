const { Router } = require('express');
const { check } = require('express-validator');

const { NAME, EMAIL, PASSWORD, ROLE, ROLE_LIST } = require('../models/user.model');

const userController = require('../controllers/user.controller');
const router = Router();

router.get('/', userController.all);

router.post('/', [
  check(NAME, `${NAME} is required`).not().isEmpty(),
  check(PASSWORD, `${PASSWORD} is required`).not().isEmpty(),
  check(PASSWORD, `${PASSWORD} must be strong`).isStrongPassword(),
  check(EMAIL, `${EMAIL} is invalid`).isEmail(),
  check(ROLE, `${ROLE} is invalid`).isIn(ROLE_LIST)
] ,userController.create);

router.put('/:id', userController.update);

router.patch('/:id/change-password', userController.updatePassword);

router.delete('/:id', userController.remove);

module.exports = router;