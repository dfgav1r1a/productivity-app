const express = require('express');
const cors = require('cors');

const activityRouter = require('./routes/activity.route.js');
const authRouter = require('./routes/auth.routes.js')

const app = express();
app.use(cors());

//telling app to use middlewar to parse req as json 
app.use(express.json());

app.use('/api', activityRouter);
app.use('/api/auth', authRouter);

module.exports = app;
