const nodemailer =  require("nodemailer")

const mailer = async(email, login, password) => {

      const transporter = nodemailer.createTransport({
        port: 465, // true for 465, false for other ports
        host: "smtp.gmail.com",
        auth: {
          user: "nasirullayevo7@gmail.com",
          pass: "smenmggcgonbqmwl",
        },
        secure: true,
      });
    
      const mailData = {
        from: "nasirullayevo7@gmail.com", // sender address
        to:  `${email}`, // list of receivers
        subject: "Sending email to confirm ",
        text: "this is your account loggings",
        html: `<b> confirmation numbers </b><br> your login: ${login}  and your passoword: ${password}<br/>`,
      };
    
      await transporter.sendMail(mailData);    
}

module.exports = {
    mailer
}