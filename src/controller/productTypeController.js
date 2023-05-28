import productTypeServices from '../services/productTypeServices'

let handleGetAllProductType = async (req, res) => {
    let id = req.query.id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMassage: 'Missing required parameters',
            productType: []
        })

    }
    let productType = await productTypeServices.getAllProductTypes(id)
    return res.status(200).json({
        errCode: 0,
        errMassage: 'ok',
        productType
    })
}

let handleCreateProductType = async (req, res) => {
    let message = await productTypeServices.createNewProductType(req.body)
    console.log('check message create product type:', message);
    return res.status(200).json(message)
}

let handleDeleteProductType = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMassage: 'Missing required parameters',
        })
    }
    let message = await productTypeServices.deleteProductType(req.body.id)
    return res.status(200).json(message)
}

let handleEditProductType = async (req, res) => {
    let data = req.body
    let message = await productTypeServices.updateProductType(data)
    return res.status(200).json(message)
}



module.exports = {
    handleGetAllProductType, handleCreateProductType, handleEditProductType, handleDeleteProductType
}