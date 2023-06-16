require('dotenv').config();
import nodemailer from 'nodemailer'

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_APP, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Quốc Khải 👻" <Khai.cq.27@gmail.com>', // sender address
        to: dataSend.receiveEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
        html: getBodyHTMLEmail(dataSend),
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = ''
    if (dataSend.language === 'vi') {
        result =
            `
        <h3>Xin chào quý khách ${dataSend.patientName}</h3>
        <p>Bạn nhận được Email này thì đã đặt lịch online trên Website Icare</p>
        <p>Thông tin đặt lịch khám bệnh</p>
        <div><p>Thời gian: ${dataSend.time}</p></div>
        <div><p>Bác sĩ: ${dataSend.doctorName}</p></div>
        <p>Nếu các thông tin trên là đúng, thì vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặc lịch khám bệnh</p>
       <div>
       <a href=${dataSend.redirectLink} target="_blank">Click here</a>
       </div>
       <div>Xin chân thành cảm ơn!</div>
            `
    }
    if (dataSend.language === 'en') {
        result =
            `
        <h3>Dear ${dataSend.patientName}</h3>
        <p>If you receive this email, you have booked an online appointment on Icare Website</p>
        <p>Information to book a medical appointment</p>
        <div><p>Time:${dataSend.time}</p></div>
        <div><p>Doctor:${dataSend.doctorName}</p></div>
        <p>If the above information is correct, please click on the link below to confirm and complete the appointment procedure.</p>
       <div>
       <a href=${dataSend.redirectLink} target="_blank">Click here</a>
       </div>
       <div>Sincerely thanks!</div>
            `
    }
    return result
}


module.exports = {
    sendSimpleEmail
}