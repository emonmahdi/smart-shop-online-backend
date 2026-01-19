import Product from "./product.model.js"


const createProductIntoDB = async(data) => {
    const result = await Product.create(data);
    return result;
}

const getAllProductIntoDB = async() => {
    const result = await Product.find();
    return result;
}
const getSingleProductIntoDB = async(id) => {
    const result = await Product.findById(id);
    return result;
}

export const ProductService = {
    createProductIntoDB,
    getAllProductIntoDB,
    getSingleProductIntoDB
}