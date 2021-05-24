const db = require('../util/database');

function fetchAll() {
    let promiseFunction = async (resolve, reject) => {
        try {
            let data = await db.execute('SELECT * FROM products');
            resolve({ success: true, data: data });
        } catch (e) {
            reject({ success: false, error: e });
        }
    };
    return new Promise(promiseFunction);
}

function getProduct(productId) {
    let promiseFunction = async (resolve, reject) => {
        try {
            let result = await db.execute('SELECT * FROM products where products.id = ?', [productId]);
            resolve({ success: true, data: result });
        } catch (e) {
            reject({ success: false, error: e });
        }
    };
    return new Promise(promiseFunction);
}


function addProduct(product) {
    let promiseFunction = async (resolve, reject) => {
        try {
            let result = await db.execute('INSERT INTO products(name, price, description, imageUrl) values(?,?,?,?)',
            [product.name, +product.price, product.description, product.imageUrl]);
            resolve({ success: true, data: result });
        } catch (e) {
            reject({ success: false, error: e });
        }
    };
    return new Promise(promiseFunction);
}

function deleteProduct(productId) {
    let promiseFunction = async (resolve, reject) => {
        try {
            let result = await db.execute('DELETE FROM products WHERE products.id = ?', [productId]);
            resolve({ success: true, data: result, message: 'Product deleted successfull' });
        } catch (e) {
            reject({ success: false, error: e, message: 'Product delete operation fail'});
        }
    };
    return new Promise(promiseFunction);
}

function updateProduct(productId, product) {
    let promiseFunction = async (resolve, reject) => {
        try {
            let result = await db.execute('UPDATE products SET name = ?, price = ?, description = ?, imageUrl = ? WHERE products.id = ?', 
            [product.name, +product.price, product.description, product.imageUrl, productId]);

            resolve({ success: true, data: result, message: 'Product deleted successfull' });
        } catch (e) {
            reject({ success: false, error: e, message: 'Product delete operation fail'});
        }
    };
    return new Promise(promiseFunction);
}

module.exports = {
    fetchAll: fetchAll,
    addProduct: addProduct,
    deleteProduct: deleteProduct,
    getProduct: getProduct,
    updateProduct: updateProduct
};

