import { reject } from 'lodash'
import db from '../models/index'

let getProductListHome = (limitInput) => {
    return new Promise(async (resolve, reject) => {
        try {
            let products = await db.Product.findAll({
                limit: limitInput,
                order: [['createdAt', 'DESC']],
                attributes: {
                    exclude: [],
                },
                // include: [
                //     { model: db.Category, as: 'categoryData', attributes: ['valueEn', 'valueVi'] },
                //     { model: db.ProductType, as: 'productTypeData', attributes: ['valueEn', 'valueVi'] },
                // ],
                raw: true,
                nest: true
            })
            resolve({
                errCode: 0,
                data: products,
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getProductById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    message: 'missing required parameter'
                })
            } else {
                let data = await db.Product.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: {
                        exclude: ['image'],
                    },
                    include: [
                        { model: db.Category, as: 'categoryData', attributes: ['valueEn', 'valueVi'] },
                        { model: db.ProductType, as: 'productTypeData', attributes: ['valueEn', 'valueVi'] },
                    ],
                    raw: false,
                    nest: true
                })
                // if (data && data.image) {
                //     data.image = new Buffer(data.image, 'base64').toString('binary')
                // }
                if (!data) data = {};
                resolve({
                    errCode: 0,
                    data: data
                })
            }
        } catch (e) {
            reject(e)
        }

    })
}

module.exports = {
    getProductListHome, getProductById
}
