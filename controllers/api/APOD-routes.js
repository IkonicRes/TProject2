const router = require('express').Router();
const axios = require('axios');
const { isAuthenticated } = require('../../utils/auth');

router.get('/', isAuthenticated, async (req, res) => {
    try {
        const apiKey = 'hvCBU5IjwIm9TjUgNr2Ei551uYe2vasCjcJKpKkY'; // Replace with your actual NASA API key
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    
        const response = await axios.get(apiUrl);
        res.json(response.data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
        res.status(500).json({ error: 'An error occurred while fetching APOD' });
      }    
})


// Export the router for use in other modules
module.exports = router;
