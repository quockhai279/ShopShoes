import categoryService from '../services/categoryService'

let handleGetAllProductCategory = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(200).json({
            errCode: -1,
            Message: 'Missing required parameter',
            categories: []
        })
    }
    let categories = await categoryService.getAllCategories(id)
    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        categories,
    })
}

let handleCreateNewCategory = async (req, res) => {
    let message = await categoryService.createNewCategory(req.body)
    return res.status(200).json(message)
}

let handleDeleteProductCategory = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMassage: 'Missing required parameters',
        })
    }
    let message = await categoryService.deleteProductCategory(req.body.id)
    return res.status(200).json(message)
}

let handleEditProductCategory = async (req, res) => {
    let data = req.body
    let message = await categoryService.updateCategoryData(data)
    return res.status(200).json(message)
}


module.exports = {
    handleGetAllProductCategory, handleCreateNewCategory, handleEditProductCategory, handleDeleteProductCategory

}