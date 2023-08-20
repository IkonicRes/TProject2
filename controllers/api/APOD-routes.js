const router = require('express').Router();
const axios = require('axios');
const { isAuthenticated } = require('../../utils/auth');


const apiKey = 'hvCBU5IjwIm9TjUgNr2Ei551uYe2vasCjcJKpKkY'; // Replace with your actual NASA API key
let apiUrl;
router.get('/', isAuthenticated, async (req, res) => {
    try {
        apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    
        const response = await axios.get(apiUrl);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
        res.status(500).json({ error: 'An error occurred while fetching APOD' });
      }    
})

router.get('/random', async (req, res) => {
  try {
    // Define the date range (June 16, 1995, to yesterday)
    const startDate = new Date(1995, 5, 16);
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // Generate a random date within the range
    const randomDate = new Date(startDate.getTime() + Math.random() * (yesterday.getTime() - startDate.getTime()));

    // Format the random date as YYYYMMDD string
    const randomDateStr = formatDate(randomDate);

    // Replace apiKey with your actual API key
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${randomDateStr}`;

    // Make the API request using your chosen HTTP library
    const axios = require('axios');
    const randomAPODResponse = await axios.get(apiUrl);
    const randomAPODData = randomAPODResponse.data; // Extract only the data

    console.log("Random APOD data:", randomAPODData);

    // Send the extracted data as a response
    res.json(randomAPODData);
  } catch (error) {
    console.error('Error fetching APOD:', error);
    res.status(500).json({ error: 'An error occurred while fetching APOD' });
  }
});


// Function to format date as YYYYMMDD string
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
  
router.post('/', async (req, res) => {
  // Create a new user with the data provided in the request body
  try {
    const apodData = await Apod.create(req.body)
    res.status(201).json(userData);
  } catch (err) {
    // Handle any errors that occur during the creation
    res.status(500).json(err);
  }
});

// Export the router for use in other modules
module.exports = router;
