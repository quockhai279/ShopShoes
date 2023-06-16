import db from '../models/index'
require('dotenv').config();
import emailService from './emailServices'

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType
                || !data.date || !data.fullName) {
                resolve({
                    errCode: 1,
                    Message: 'Missing parameter'
                })
            } else {
                await emailService.sendSimpleEmail({
                    receiveEmail: data.email,
                    patientName: data.fullName,
                    time: data.timeString,
                    doctorName: data.doctorName,
                    language: data.language,
                    redirectLink: 'https://www.youtube.com/watch?v=niPkap1ozUA',
                })

                let user = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3'
                    }
                })
                if (user && user[0]) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user[0].id },
                        defaults: {
                            statusId: 'S1',
                            doctorId: data.doctorId,
                            patientId: user[0].id,
                            date: data.date,
                            timeType: data.timeType
                        }
                    })
                }
                resolve({
                    errCode: 0,
                    Message: 'Save info patient succeed !',
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    postBookAppointment
}