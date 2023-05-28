import productListService from "../services/productListService"

let getProductList = async (req, res) => {
    let limit = req.query.limit
    if (!limit) limit = 40
    try {
        let response = await productListService.getProductListHome(+limit)
        return res.status(200).json(response)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            Message: 'Error from server'
        })
    }

}

let getProductDetailById = async (req, res) => {
    try {
        let info = await productListService.getProductById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e);
        return res.status(200).json({
            errCode: -1,
            Message: 'Error from server'
        })
    }
}

module.exports = {
    getProductList, getProductDetailById
}