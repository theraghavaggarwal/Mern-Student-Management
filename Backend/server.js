
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

const port = process.env.PORT || 8070;

app.use(cors());

app.use(bodyParser.json());

const URL = "mongodb+srv://raghavaggarwal8804:Abcd1234@cluster0.lyby9jw.mongodb.net/students?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Mongodb Connection Success!');
});

const studentRoute = require('./routes/students_route');

app.use('/student', studentRoute);

app.listen(port, () => {
  console.log(`Server is up and running on port : ${port}`);
});
