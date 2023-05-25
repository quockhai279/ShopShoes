import db from '../models/index'

// let CheckNameCategory = (name) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let category = await db.Category.findOne({
//                 where: { name: name }
//             })
//             if (category) {
//                 resolve(true)
//             } else {
//                 resolve(false)
//             }
//         } catch (e) {
//             reject(e)
//         }
//     })
// }

let getAllCategories = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = ''
            if (categoryId === 'ALL') {
                category = await db.Category.findAll()
            }
            if (categoryId && categoryId !== 'ALL') {
                category = await db.Category.findOne({
                    where: { id: categoryId }
                })
            }
            resolve(category)
        } catch (e) {
            reject(e)
        }
    })
}

let createNewCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Category.create({
                // dataSQL : inputData
                keyMap: data.keyMap,
                type: data.type,
                valueEn: data.valueEn,
                valueVi: data.valueVi,
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

let deleteProductCategory = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        let category = await db.Category.findOne({
            where: { id: categoryId },
        })
        if (!category) {
            resolve({
                errCode: 2,
                errMessage: `Product category isn't exist`
            })
        }
        await db.Category.destroy({
            where: { id: categoryId }
        })
        resolve({
            errCode: 0,
            errMessage: `Product category is deleted`
        })
    })
}

let updateCategoryData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Missing required parameters'
                })
            }
            let category = await db.Category.findOne({
                where: { id: data.id },
                raw: false
            })
            if (category) {
                category.keyMap = data.keyMap;
                category.type = data.type;
                category.valueEn = data.valueEn;
                category.valueVi = data.valueVi

                await category.save();
                resolve({
                    errCode: 0,
                    message: 'Update the product category succeeds!'
                })
            } else {
                resolve({
                    errCode: 1,
                    message: `Product category is not found!`
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}



module.exports = {
    getAllCategories, createNewCategory, deleteProductCategory, updateCategoryData
}