const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.CONNECTION_STRING_MONGO_DB);
    console.log('Connected to the database');
  } catch (error) {
    throw new Error('Error connecting to database');
  }
}

module.exports = { dbConnection };