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

module.exports = {
    createSpecialty, getAllSpecialty
}