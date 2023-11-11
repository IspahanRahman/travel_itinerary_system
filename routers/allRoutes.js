const express = require('express');
const apiRouter = express.Router();

const userRouter = require('./userRouter');
const itineraryRouter = require('./itinerary');

apiRouter.use(userRouter);
apiRouter.use(itineraryRouter);

module.exports = apiRouter