const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const studentRoutes = require('./routes/studentRoutes');
app.use('/api/students', studentRoutes);

module.exports = app;


