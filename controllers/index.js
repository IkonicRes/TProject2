// Import the required modules
const router = require('express').Router();
const apiRoutes = require('./api');
const axios = require('axios');
const rendRouter = require('./rendered');
const authRoutes = require('./auth');
const schedule = require('node-schedule');

// Use the '/api' route and handle it with apiRoutes
router.use('/api', apiRoutes);

// Use the root route '/' and handle it with rendRouter
router.use('/', rendRouter);

// Use the '/auth' route and handle it with authRoutes
router.use('/auth', authRoutes);

// let date = new Date()
// var year = date.toLocaleString("default", { year: "numeric" });
// var month = date.toLocaleString("default", { month: "2-digit" });
// var day = date.toLocaleString("default", { day: "2-digit" })
// var formattedDate = year + "-" + month + "-" + day;
var formattedDate = "2023-02-15";
const apiKey = 'hvCBU5IjwIm9TjUgNr2Ei551uYe2vasCjcJKpKkY'; // Replace with your actual NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}`;
const response = axios.get(apiUrl);
const APOD = response.data
// const midnightTask = schedule.scheduleJob('0 0 * * *', async () => {
//     const currentDate = new Date();
//     const pastDate = new Date(currentDate);
//     pastDate.setDate(currentDate.getDate() - 1);
  
    try {
      // Add data to the database for the past day
      const existingAPOD = APOD.findOne({ where: { hdurl:  APOD.hdurl } });
      if (existingAPOD) {
        console.log('error', 'APOD in db already.'); // Set flash message for error
      }
      else {
        newAPOD = APOD.create(APOD)
        res.status(200).json(newAPOD)
        console.log('Data added to the database for the past day.');
      }
    } catch (error) {
      console.error('Error adding data to the database:', error);
    }
  // });


// Export the router module
module.exports = router;
