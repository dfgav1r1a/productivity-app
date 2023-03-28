const express = require('express');
const mongoose = require('mongoose');

const app = require('./api'); 

//load environment variable from .env
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

//connecting to DB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
};

app.listen (PORT, () => {
  console.log(`Server running on ${PORT}`);
});
