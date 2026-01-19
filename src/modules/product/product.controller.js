import { ProductService } from "./product.service.js";

const createProduct = async (req, res) => {
  try {
    const product = req.body;
    const result = await ProductService.createProductIntoDB(product);

    res.status(200).json({
      success: true,
      message: "Product create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductService.getAllProductIntoDB();

    res.status(200).json({
      success: true,
      message: "Product Fetch Successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await ProductService.getSingleProductIntoDB(id);

    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product Fetch Successfully",
      data: result
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProducts,
  getSingleProduct
};
