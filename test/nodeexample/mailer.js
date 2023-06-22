const nodemailer = require("nodemailer")

const mailOptions = {
    from: '"smile shrestha 👻" <shrestha.smile31@gmail.com>', // sender address
    to: "killaaasmile01@gmail.com, shaktirajbhandari@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "", // plain text body
    html: "<b>Hello world?</b>", // html body
}
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'shrestha.smile31@gmail.com',
    pass: ''
}
});

const mailer = (mailOptions, transporter) => {
    transporter.sendMail(mailOptions,(err,info) => {  //err=false data, info=true data
        if (err)
        {
            console.log(err)
        }
        else {
            console.log(info)
        }
    });
};
mailer(mailOptions,transporter)