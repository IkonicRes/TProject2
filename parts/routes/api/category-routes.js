// Import the necessary modules
const router = require('express').Router();
const { Category, Product } = require('../../models');

// Define the `/api/categories` endpoint for handling GET requests
router.get('/', async (req, res) => {
  try {
    // Retrieve all categories and include their associated products
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    // Handle any errors that occur during the retrieval
    res.status(500).json(err);
  }
});

// Define the `/api/categories/:id` endpoint for handling GET requestsjn 
router.get('/:id', async (req, res) => {
  // Find a category by its `id` value and include its associated products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    res.status(200).json(categoryData);
  } catch(err) {
    // Handle any errors that occur during the retrieval
    res.status(500).json(err);
  }
});

// Define the `/api/categories` endpoint for handling POST requests
router.post('/', async (req, res) => {
  // Create a new category with the data provided in the request body
  try {
    const categoryData = await Category.create(req.body)
    res.status(201).json(categoryData);
  } catch (err) {
    // Handle any errors that occur during the creation
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // Update a category with the provided `id` using the data from the request body
  try {
    // Perform the update operation
    const [rowsUpdated] = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // Check if any rows were actually updated
    if (rowsUpdated === 0) {
      return res.status(404).json({ error: 'Category not found.' });
    }

    // Fetch the updated category data from the database
    const updatedCategory = await Category.findByPk(req.params.id);

    // Respond with the updated category data
    res.status(200).json(updatedCategory);
  } catch (err) {
    // Handle any errors that occur during the update
    res.status(500).json(err);
  }
});

// Define the `/api/categories/:id` endpoint for handling DELETE requests
router.delete('/:id', async (req, res) => {
  // Delete a category with the provided `id`
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.status(204).end()
  } catch (err) {
    // Handle any errors that occur during the deletion
    res.status(500).json(err);
  }
});

// Export the router for use in other modules
module.exports = router;
