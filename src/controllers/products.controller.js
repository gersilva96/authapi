import Product from "../models/Product";

const productsController = {
    getProducts: async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (error) {
            res.status(400).json({error});
        }
    },
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            res.json(product);
        } catch (error) {
            res.status(400).json({error});
        }
    },
    createProduct: async (req, res) => {
        try {
            const { name, category, price, imgURL } = req.body;
            const newProduct = new Product({name, category, price, imgURL});
            const savedProduct = await newProduct.save();
            res.status(201).json(savedProduct);
        } catch (error) {
            res.status(400).json({error});
        }
    },
    updateProductById: async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            res.json(updatedProduct);
        } catch (error) {
            res.status(400).json({error});
        }
    },
    deleteProductById: async (req, res) => {
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id);
            res.json(deletedProduct);
        } catch (error) {
            res.status(400).json({error});
        }
    },
};

export default productsController;