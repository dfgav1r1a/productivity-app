const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const activityRouter = require('./routes/activity.route.js');

const app = express(); 
app.use(cors());

//load environment variable from .env
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const PORT = process.env.PORT || 5000;

//telling express to parse req as json
app.use(express.json());

//connecting to DB
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
};

app.use('/api', activityRouter);

app.listen (PORT, () => {
  console.log(`Server running on ${PORT}`);
});
