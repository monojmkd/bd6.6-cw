const express = require('express');
const { resolve } = require('path');
const cors = require('cors');
const { getAllEmployees, getEmployeeById } = require('./controllers');
const app = express();
const port = 3010;
app.use(cors());
app.use(express.json());
app.use(express.static('static'));

// GET all employees
app.get('/employees', async (req, res) => {
  const employees = getAllEmployees();
  res.json({ employees });
});
app.get('/employees/details/:id', async (req, res) => {
  let employee = getEmployeeById(parseInt(req.params.id));
  res.json({ employee });
});

module.exports = { app };
