import db from "../models/index"

let createClinic = (data) => new Promise(async (resolve, reject) => {
    try {
        if (!data.name
            || !data.address || !data.descriptionMarkdown
            || !data.descriptionHTML || !data.imageBase64
        ) {
            resolve({
                errCode: 1,
                Message: 'Missing parameter'
            })
        } else {
            await db.Clinic.create({
                name: data.name,
                address: data.address,
                descriptionHTML: data.descriptionHTML,
                descriptionMarkdown: data.descriptionMarkdown,
                image: data.imageBase64,
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

let getAllClinic = () => new Promise(async (resolve, reject) => {
    try {
        let data = await db.Clinic.findAll()
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

let getDetailClinicById = (id) => new Promise(async (resolve, reject) => {
    try {
        if (!id) {
            resolve({
                errCode: 1,
                Message: 'Missing parameter'
            })
        } else {
            let data = await db.Clinic.findOne({
                where: {
                    id: id
                },
                attributes: ['name', 'address', 'descriptionHTML', 'descriptionMarkdown']
            })
            if (data) {
                let doctorClinic = []
                doctorClinic = await db.DoctorInfo.findAll({
                    where: { clinicId: id },
                    attributes: ['doctorId', 'provinceId']
                })
                data.doctorClinic = doctorClinic
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
    createClinic, getAllClinic, getDetailClinicById
}