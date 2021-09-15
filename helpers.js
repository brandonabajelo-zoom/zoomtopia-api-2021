const jwt = require('jsonwebtoken');

const generateHeader = () => {
  const { API_KEY, API_SECRET } = process.env;
  const token = jwt.sign({ iss: API_KEY, exp: new Date().getTime() * 3000 }, API_SECRET);

  return token ? { headers: { Authorization: `Bearer ${token}` }} : null;
}

const errorHandler = (error = {}, res = {}, customMessage = 'Error') => {
  const { status, data } = error.response || {};

  return res.status(status || 500).json({ msg: data.message || customMessage})
}

module.exports = { errorHandler, generateHeader };