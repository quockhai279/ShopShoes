import db from "../models/index"

let createSpecialty = (data) => new Promise(async (resolve, reject) => {
    try {
        if (!data.name || !data.imageBase64 || !data.descriptionMarkdown) {
            resolve({
                errCode: 1,
                Message: 'Missing parameter'
            })
        } else {
            await db.Specialty.create({
                name: data.name,
                image: data.imageBase64,
                descriptionHTML: data.descriptionHTML,
                descriptionMarkdown: data.descriptionMarkdown,
            })
            resolve({
                errCode: 0,
                Message: 'ok'
            })
        }
    } catch (e) {
        reject(e)
    }
})

let getAllSpecialty = () => new Promise(async (resolve, reject) => {
    try {
        let data = await db.Specialty.findAll()
        if (data && data.length > 0) {
            data.map(item => {
                item.image = new Buffer(item.image, 'base64').toString('binary')
                return item
            })
        }
        resolve({
            errCode: 0,
            Message: 'ok',
            data
        })
    } catch (e) {
        reject(e)
    }
})

let getDetailSpecialtyById = ({ id, location }) => new Promise(async (resolve, reject) => {
    try {
        if (!id || !location) {
            resolve({
                errCode: 1,
                Message: 'Missing parameter'
            })
        } else {
            let data = await db.Specialty.findOne({
                where: {
                    id: id
                },
                attributes: ['descriptionHTML', 'descriptionMarkdown']
            })
            if (data) {
                let doctorSpecialty = []
                if (location === 'ALL') {
                    doctorSpecialty = await db.DoctorInfo.findAll({
                        where: { specialtyId: id },
                        attributes: ['doctorId', 'provinceId']
                    })
                } else {
                    //find by location
                    doctorSpecialty = await db.DoctorInfo.findAll({
                        where: {
                            specialtyId: id,
                            provinceId: location,
                        },
                        attributes: ['doctorId', 'provinceId']
                    })
                }
                data.doctorSpecialty = doctorSpecialty
            } else data = {}
            resolve({
                errCode: 0,
                Message: 'ok',
                data
            })
        }
    } catch (e) {
        reject(e)
    }
})

module.exports = {
    createSpecialty, getAllSpecialty, getDetailSpecialtyById
}