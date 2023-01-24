const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const authRouter = require('./authRouter');

const app = express();
const PORT = process.env.PORT || 5000;
const URL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.tl6h4xw.mongodb.net/auth_roles?retryWrites=true&w=majority`;

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    mongoose
      .connect(URL)
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log(`DB connection error: ${err}`));
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
