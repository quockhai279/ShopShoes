import specialtyService from '../services/specialtyService'

let createSpecialty = async (req, res) => {
    try {
        let info = await specialtyService.createSpecialty(req.body)
        return res.status(200).json(info)
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createSpecialty
}