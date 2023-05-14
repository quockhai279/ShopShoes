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

module.exports = {
    getProductList
}