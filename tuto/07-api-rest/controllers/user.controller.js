const { response, request } = require('express');
const httpStatus = require('http-status-codes');

const getUsers = (req = response, res = request) => res.status(httpStatus.StatusCodes.OK).json({
  status: httpStatus.ReasonPhrases.OK,
  message: 'Hello from get of user controller',
});

const postUsers = (req = response, res = request) => res.status(httpStatus.StatusCodes.CREATED).json({
  status: httpStatus.ReasonPhrases.CREATED,
  message: 'Hello from post of user controller',
});

const putUsers = (req = response, res = request) => res.status(httpStatus.StatusCodes.ACCEPTED).json({
  status: httpStatus.ReasonPhrases.ACCEPTED,
  message: 'Hello from put of user controller',
});

const patchUsers = (req = response, res = request) => res.status(httpStatus.StatusCodes.ACCEPTED).json({
  status: httpStatus.ReasonPhrases.ACCEPTED,
  message: 'Hello from patch of user controller',
});

const deleteUsers = (req = response, res = request) => res.status(httpStatus.StatusCodes.OK).json({
  status: httpStatus.ReasonPhrases.OK,
  message: 'Hello from delete of user controller',
});

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  patchUsers,
  deleteUsers
};