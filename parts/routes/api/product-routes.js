const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    // Find all products and include their associated Category and Tag data
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });

    // Return the product data as a JSON response
    res.status(200).json(productData);
  } catch (error) {
    // If there's an error, return it as a JSON response with a status code of 500
    res.status(500).json(error);
  }
});

// GET one product by its ID
router.get('/:id', async (req, res) => {
  try {
    // Find a single product by its ID and include its associated Category and Tag data
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag }],
    });

    // Return the product data as a JSON response
    res.status(200).json(productData);
  } catch (error) {
    // If there's an error, return it as a JSON response with a status code of 500
    res.status(500).json(error);
  }
});

// POST (create) a new product
router.post('/', (req, res) => {
  /* 
    The request body should contain the following properties:
    - product_name: String
    - price: Number
    - stock: Number
    - tagIds: Array of tag IDs
    - category_id: Category ID
  */
  Product.create(req.body)
    .then((product) => {
      // If there are product tags, create pairings in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });

        // Bulk create product tags
        return ProductTag.bulkCreate(productTagIdArr).then(() => {
          // After creating the tags, respond with the created product
          res.status(201).json(product);
        });
      }

      // If no product tags, just respond with the created product
      res.status(201).json(product);
    })
    .catch((err) => {
      // If there's an error, log it and return it as a JSON response with a status code of 400
      console.log(err);
      res.status(400).json(err);
    });
});


// Define a route for updating a product
router.put('/:id', async (req, res) => {
  // Update the product data in the database
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // Check if there are tag IDs in the request body
      if (req.body.tagIds && req.body.tagIds.length) {
        // Find all existing product tags for the given product ID
        ProductTag.findAll({
          where: { product_id: req.params.id }
        }).then((productTags) => {
          // Create a filtered list of new tag IDs that are not already associated with the product
          const productTagIds = productTags.map(({ tag_id }) => tag_id);
          const newProductTags = req.body.tagIds
            .filter((tag_id) => !productTagIds.includes(tag_id))
            .map((tag_id) => {
              return {
                product_id: req.params.id,
                tag_id,
              };
            });

          // Determine which product tags to remove (those that are not in the new list of tag IDs)
          const productTagsToRemove = productTags
            .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
            .map(({ id }) => id);

          // Perform both actions (deleting old product tags and creating new product tags)
          return Promise.all([
            ProductTag.destroy({ where: { id: productTagsToRemove } }),
            ProductTag.bulkCreate(newProductTags),
          ]);
        });
      }

      return res.json(product);
    })
    .catch((err) => {
      // Handle any errors that occur during the update process
      res.status(400).json(err);
    });
});

// Define a route for deleting a product
router.delete('/:id', async (req, res) => {
  try {
    // Delete the product with the specified ID from the database
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });

    // Send a successful response with no content
    res.status(204).end();
  } 
  catch (error) {
    // Handle any errors that occur during the delete process
    res.status(500).json(error);
  }
});

// Export the router
module.exports = router;
