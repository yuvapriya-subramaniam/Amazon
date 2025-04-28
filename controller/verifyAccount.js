const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const sendVerificationEmail = async (toEmailAddress) => {
  try {
    const send = await transporter.sendMail({
      from: `'Amazon team' ${process.env.EMAIL}`,
      to: toEmailAddress,
      subject: "Verify email for Amazon registration",
      text: "",
      html: `<p>Please verify your email to complete your Amazon account creation process.<br/>
      <a href='http://localhost:4000/api/user/verify?email=${toEmailAddress}'>Verify Email</a></p>`,
    });
  } catch (error) {
    throw new Error("Error while sending verification email: "+error.message);
  }
};

module.exports = sendVerificationEmail;