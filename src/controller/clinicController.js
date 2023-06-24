import clinicService from '../services/clinicService'

let createClinic = async (req, res) => {
    try {
        let info = await clinicService.createClinic(req.body)
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errManage: `Error from the server: ${e}`
        })
    }
}

let getAllClinic = async (req, res) => {
    try {
        let info = await clinicService.getAllClinic()
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server, ${e}`
        })
    }
}

let getDetailClinicById = async (req, res) => {
    try {
        let info = await clinicService.getDetailClinicById(req.query.id)
        return res.status(200).json(info)
    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: `Error from the server, ${e}`
        })
    }
}




module.exports = {
    createClinic, getAllClinic, getDetailClinicById
}