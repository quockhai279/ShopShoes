import db from '../models/index'

let getAllProductTypes = (productTypeId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let productType = '';
            if (productTypeId === 'ALL') {
                productType = await db.ProductType.findAll();
            }
            if (productTypeId && productTypeId !== 'ALL') {
                productType = await db.ProductType.findOne({
                    where: { id: productTypeId }
                });
            }
            resolve(productType)
        } catch (e) {
            reject(e)
        }
    })
}

let createNewProductType = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.ProductType.create({
                // dataSQL : inputData
                valueEn: data.valueEn,
                valueVi: data.valueVi,
                categoryId: data.categoryId
            })
            resolve({
                errCode: 0,
                message: 'ok'
            })
        } catch (e) {
            reject(e)
        }
    })
}

let deleteProductType = (productTypeId) => {
    return new Promise(async (resolve, reject) => {
        let productType = await db.ProductType.findOne({
            where: { id: productTypeId },
        })
        if (!productType) {
            resolve({
                errCode: 2,
                errMessage: `Type of product isn't exist`
            })
        }
        await db.ProductType.destroy({
            where: { id: productTypeId }
        })
        resolve({
            errCode: 0,
            errMessage: `Type of product is deleted`
        })
    })
}

let updateProductType = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.categoryId) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let productType = await db.ProductType.findOne({
                where: { id: data.id },
                raw: false
            })
            if (productType) {
                productType.valueEn = data.valueEn;
                productType.valueVi = data.valueVi
                productType.categoryId = data.categoryId

                await productType.save();
                resolve({
                    errCode: 0,
                    message: 'Update type of product succeeds!'
                })
            } else {
                resolve({
                    errCode: 1,
                    message: `Type of product is not found!`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}





module.exports = {
    getAllProductTypes, createNewProductType, updateProductType, deleteProductType
}