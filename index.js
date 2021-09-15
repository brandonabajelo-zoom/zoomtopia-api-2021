require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.baseURL = 'https://api.zoom.us/v2';

const app = express();

// Add Middlewares
app.use([cors(), express.json()]);
app.options('*', cors());

app.use('/api/users', require('./routes/api/users'));

app.listen(5000, () => console.log('API started!'));