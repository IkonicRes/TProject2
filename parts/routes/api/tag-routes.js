// Importing the required modules
const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// Creating the `/api/tags` endpoint

// GET request to fetch all tags
router.get('/', async (req, res) => {
  try {
    // Fetching all tags and including associated Product data
    const tagData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }]
    })
    // Sending the fetched data as a JSON response with status code 200
    res.status(200).json(tagData);
  } 
  // Handling errors and sending the error as a JSON response with status code 500
  catch (error) {
    res.status(500).json(error);
  }
});

// GET request to fetch a single tag by its ID
router.get('/:id', async (req, res) => {
  try{
    // Fetching a tag by its ID and including associated Product data
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    // Sending the fetched data as a JSON response with status code 200
    res.status(200).json(tagData);
  }
  // Handling errors and sending the error as a JSON response with status code 500
  catch(err){
    res.status(500).json(err);
  }
});

// POST request to create a new tag
router.post('/', async (req, res) => {
  try {
    // Creating a new tag with the provided request body
    const tagData = await Tag.create(req.body)
    // Sending the created tag data as a JSON response with status code 201
    res.status(201).json(tagData);
  }
  // Handling errors and sending the error as a JSON response with status code 500
  catch(err) {
    res.status(500).json(err);
  }
});

// PUT request to update a tag's name by its ID
router.put('/:id', async (req, res) => {
  try{
    // Updating a tag's name with the provided request body and ID
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    // Sending the updated tag data as a JSON response with status code 200
    res.status(200).json(tagData);
  }
  // Handling errors and sending the error as a JSON response with status code 500
  catch(err){
    res.status(500).json(err);
  }
});

// DELETE request to delete a tag by its ID
router.delete('/:id', async (req, res) => {
  try{
    // Deleting a tag with the provided ID
    await Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
    // Sending a success response with status code 204 (No Content)
    res.status(204).end();
  }
  // Handling errors and sending the error as a JSON response with status code 500
  catch(err){
    res.status(500).json(err);
  }
});

// Exporting the router for use in other files
module.exports = router;
