const express = require('express');
const mongoose = require('mongoose');

const authRouter = require('./authRouter');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/auth', authRouter);

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://admin:hHuIK9la4L9wtg19@cluster0.tl6h4xw.mongodb.net/auth_roles?retryWrites=true&w=majority`
    );
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
