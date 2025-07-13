import productService from "../services/productService.js";






const myFunction = (b,a) => {
    return a + b;

}

//Create a new product
const createProduct = async (req, res) => {
  const product = req.body;
  //     console.log(product)
  //    return res.send(product)

  try {
    if (!product) {
      return res.status(400).send("Product required");
    }

    if (!product.price && !product.productName) {
      return res.status(400).send("Product field is required");
    }

    const data = await productService.createProduct(product);

    res.status(200).json({
      message: "product created successful",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(200).send("error occured to create product.");
  }
};

//Product page ma sabai dekhaunu panrne xa so
const getAllProduct = async (req, res) => {
  try {

    console.log(req.query);

    const data = await productService.getAllProduct(req.query);

    res.status(200).json({
      message: "All product fetched successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("error occured to fetched all products.");
  }
};

const getProductById = async (req, res) => {
  try {
    console.log("first");
    if (!req.params.id) {
      return new Error("id is required");
    }
    const id = req.params.id;

    const data = await productService.getProductById(id);
    res.status(200).json({
      message: "Product fetched successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("error occured to get product");
  }
};

const deleteProductById = async (req, res) => {
  try {
    if (!req.params.id) {
      return new Error("id is required.");
    }

    const id = req.params.id;

    const data = await productService.deleteProductById(id);

    res.status(200).json({
      message: " prodcut deleted successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send("error occured to delete product.");
  }
};

const updateProductById = async (req, res) => {
  try {
    const productId = req.params.id;

    const product = req.body;

    const data = await productService.updateProductById(product, productId);

    res.status(200).json({
      message: "Product updated successfully",
      data,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      message: "error occured to update product",
      error: error.message,
    });
  }
};

export {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updateProductById,
};
