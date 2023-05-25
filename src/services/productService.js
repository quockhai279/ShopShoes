import db from '../models/index'

let checkProductName = (name) => {
    return new Promise(async (resolve, reject) => {
        try {
            let product = await db.Product.findOne({
                where: { name: name }
            })
            if (product) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })

}

let getAllProducts = (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = ''
            if (productId === 'ALL') {
                products = await db.Product.findAll({

                })
            }
            if (productId && productId !== 'ALL') {
                products = await db.Product.findOne({
                    where: { id: productId },

                })
            }
            resolve(products)
        } catch (e) {
            reject(e)
        }
    })
}

let createNewProduct = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkProductName(data.name)
            if (check === true) {
                resolve({
                    errCode: 1,
                    message: 'Your product name is already in use, Please try another name'
                })
            } else {
                await db.Product.create({
                    name: data.name,
                    price: data.price,
                    quantity: data.quantity,
                    description: data.description,
                    image: data.image,
                })
                resolve({
                    errCode: 0,
                    message: 'ok'
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

let deleteProduct = (productId) => {
    return new Promise(async (resolve, reject) => {
        let product = await db.Product.findOne({
            where: { id: productId },
        })
        if (!product) {
            resolve({
                errCode: 2,
                errMessage: `Product isn't exist`
            })
        }
        await db.Product.destroy({
            where: { id: productId }
        })
        resolve({
            errCode: 0,
            errMessage: `Product is deleted`
        })
    })
}

let updateProductData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let product = await db.Product.findOne({
                where: { id: data.id },
                raw: false
            })
            if (product) {
                product.name = data.name;
                product.price = data.price;
                product.quantity = data.quantity;
                product.description = data.description

                if (data.image) {
                    product.image = data.image;
                }
                await product.save();
                resolve({
                    errCode: 0,
                    message: 'Update the product succeeds!'
                })
            } else {
                resolve({
                    errCode: 1,
                    message: `Product's not found!`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}








module.exports = {
    getAllProducts, createNewProduct, deleteProduct, updateProductData,
    checkProductName
}