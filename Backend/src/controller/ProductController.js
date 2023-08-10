const Product = require('../models/Product');

class ProductController {
    //[GET] /news
    async index(req, res, next) {
        let result = await Product.find({});
            res.json(result);
    }
}

module.exports = new ProductController();
