const { response, request } = require('express');
const httpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const all = (req = request, res = response) => {
  const { page = 0, limit = 10 } = req.query;

  res.status(httpStatus.StatusCodes.OK).json( {
    status: httpStatus.StatusCodes.OK,
    message: 'Getting users',
    body: {
      page,
      limit
    }
  });
};

const create = async (req = request, res = response) => { 
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });

  user.password = encryptPassword(password);
  await user.save();

  res.status(httpStatus.StatusCodes.CREATED).json({
    status: httpStatus.ReasonPhrases.CREATED,
    message: 'User created',
    body: user
  });
};

const update = (req = request, res = response) => { 
  const { id } = req.params;
  const {
    firstName, 
    lastName, 
    birthday,
    identificationNumber } = req.body;

  res.status(httpStatus.StatusCodes.OK).json({
    status: httpStatus.ReasonPhrases.OK,
    message: 'User updated',
    body: {
      id,
      firstName,
      lastName,
      birthday,
      identificationNumber
    }
  });
};

const updatePassword = (req = request, res = response) => { 
  const { id } = req.params;
  const {
    currentPassword, 
    newPassword } = req.body;

  res.status(httpStatus.StatusCodes.OK).json({
    status: httpStatus.ReasonPhrases.OK,
    message: 'Password changed',
    body: {
      id,
      currentPassword,
      newPassword
    }
  });
};

const remove = (req = request, res = response) => {
  const { id } = req.params;

  res.status(httpStatus.StatusCodes.OK).json({
    status: httpStatus.ReasonPhrases.OK,
    message: 'User deleted',
    body: { id }
  });
}

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync();
  return bcrypt.hashSync(password, salt);
}

module.exports = {
  all,
  create,
  update,
  updatePassword,
  remove
};