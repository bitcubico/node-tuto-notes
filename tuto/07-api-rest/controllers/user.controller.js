const { response, request } = require('express');
const httpStatus = require('http-status-codes');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const userModel = require('../models/user.model');

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
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(httpStatus.StatusCodes.BAD_REQUEST).json(errors);
    }

    const { name, email, password, role } = req.body;
    if (await existsUserWithThisEmail(email)) {
      return res.status(httpStatus.StatusCodes.BAD_REQUEST).json({
        status: httpStatus.ReasonPhrases.BAD_REQUEST,
        error: 'This email exists'
      });
    }

    const user = new userModel.User({ name, email, password, role });

    user.password = encryptPassword(password);
    await user.save();

    res.status(httpStatus.StatusCodes.CREATED).json({
      status: httpStatus.ReasonPhrases.CREATED,
      message: 'User created',
      body: user
    });
  } catch (error) {
    console.log(error);
    return res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: httpStatus.ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: 'Internal server error'
    });
  }
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

const existsUserWithThisEmail = async (email) => {
  return await userModel.User.findOne({ email }) !== null;
}

module.exports = {
  all,
  create,
  update,
  updatePassword,
  remove
};