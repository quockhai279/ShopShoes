import specialtyService from '../services/specialtyService'

let createSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.createSpecialty(req.body)
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server, ${e}`
        })
    }
}

let getAllSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.getAllSpecialty()
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server, ${e}`
        })
    }
}

let getDetailSpecialtyById = async (req, res) => {
    try {
        let { id, location } = req.query
        let info = await specialtyService.getDetailSpecialtyById(req.query)
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server, ${e}`
        })
    }
}

module.exports = {
    createSpecialty, getAllSpecialty, getDetailSpecialtyById
}