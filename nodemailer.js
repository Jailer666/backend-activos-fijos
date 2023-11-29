const nodemailer = require("nodemailer");
async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", secure: true, port: 465, auth: {
      user: 'wil.gero.2020@gmail.com',
      pass: 'mwvy vjek goev tjma'
    }
  });
  let info = await transporter.sendMail({
    from: 'wil.gero.2020@gmail.com', to: "santi.wg.t7@gmail.com",
    subject: "Este es un nuevo correo", text: "Hola santi", html: "<b>Hola santi</b>",
  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
sendMail();
