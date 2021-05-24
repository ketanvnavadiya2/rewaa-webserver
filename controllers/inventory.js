const inventoryService = require('../services/inventoryService');

module.exports.getProducts = async (req, res, next) => {

    try {
        let result = await inventoryService.fetchAll();
        res.status(201).json({success: true, error: null, products: result.data[0]});
    } catch (e) {
        res.status(201).json({ success: false, error: e });
    }

}

module.exports.getProduct = async (req, res, next) => {
    const productId = req.params.productId;

    try {
        let result = await inventoryService.getProduct(productId);
        res.status(201).json({success: true, error: null, products: result.data[0]});
    } catch (e) {
        res.status(201).json({ success: false, error: e });
    }

}

module.exports.addProduct = async (req, res, next) => {
    const product = req.body;
    try {
        let result = await inventoryService.addProduct(product);              

        res.status(201).json({ createdAt: 'Ok1', data: result});
    } catch (e) {
        res.status(201).json({ createdAt: 'Ok1', error: e});
    }
}

module.exports.deleteProduct = async (req, res, next) => {
    const productId = req.params.productId;

    try {
        let result = await inventoryService.deleteProduct(productId);              

        res.status(201).json({ createdAt: 'Ok1', data: result});
    } catch (e) {
        res.status(201).json({ createdAt: 'Ok1', error: e});
    }
}


module.exports.updateProduct = async (req, res, next) => {
    const productId = req.params.productId;
    const product = req.body;


    try {
        let result = await inventoryService.updateProduct(productId, product);              
        res.status(201).json({ createdAt: 'Ok1', data: result});
    } catch (e) {
        res.status(201).json({ createdAt: 'Ok1', error: e});
    }
}

