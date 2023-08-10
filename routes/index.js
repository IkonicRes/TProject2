const router = require('express').Router();
const apiRoutes = require('./api');
const axios = require('axios')
router.use('/api', apiRoutes);


router.get('/', async (req, res) => {

  try {
    
    const apiResponse = await axios.get('/api/posts'); // Adjust the API route as needed
    console.log("🚀 ~ file: index.js:11 ~ router.get ~ apiResponse:", apiResponse)

    const postsData = apiResponse.data; // Assuming the API returns an array of posts
    console.log("🚀 ~ file: index.js:14 ~ router.get ~ postsData:", postsData)

    res.render('feed', { posts: postsData });
  }
  catch(err) {
    console.log(err)
    res.status(500).json(err);
  }
});

module.exports = router;