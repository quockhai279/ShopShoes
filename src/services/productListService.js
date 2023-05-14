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
                //     include: [
                //         { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                //         { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] },
                //     ],
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

module.exports = {
    getProductListHome,
}
