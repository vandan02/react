const PRODUCT = require("../model/productmodel");

module.exports = {
  addproducts: async (req, res) => {
    console.log("add products", req.body);

    try {
      const data = await PRODUCT.create(req.body);

      res.status(201).send(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
  deleteproducts: async (req, res) => {
    try {
      const data = await PRODUCT.findByIdAndDelete(req.params.id);
      if (!data) return res.status(404).json({ message: "Product not found" });

      res.status(200).json({
        message: "Product deleted successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  updateproduct: async (req, res) => {
    try {
      const data = await PRODUCT.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!data) return res.status(404).json({ message: "Product not found" });

      res.status(200).json({
        message: "Product updated successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
  getproducts: async (req, res) => {
    try {
      const data = await PRODUCT.find();
      res.status(200).json({
        message: "Products fetched successfully",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};
