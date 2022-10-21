const { Schema, model } = require('mongoose');

const NAME = 'name';
const EMAIL = 'email';
const PASSWORD = 'password';
const ROLE = 'role';
const PHOTO = 'photo';
const ACTIVE = 'active';
const GOOGLE = 'google';
const ROLE_LIST = ['ADMIN', 'CUSTOMER'];

const UserSchema = Schema({
  name: { type: String, required: [true, `${NAME} is required`] },
  email: { type: String, required: [true, `${EMAIL} is required`], unique: true },
  password: { type: String, required: [true, `${PASSWORD} is required`] },
  role: { type: String, required: [true, `${ROLE} is required`], enum: ROLE_LIST },
  photo: { type: String },
  active: { type: Boolean, default: true },
  google: { type: Boolean, default: false },
})

const User = model('User', UserSchema);

module.exports = {
  User,
  NAME,
  EMAIL,
  PASSWORD,
  ROLE,
  PHOTO,
  ACTIVE,
  GOOGLE,
  ROLE_LIST
};