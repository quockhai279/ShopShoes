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

module.exports = {
    createSpecialty
}