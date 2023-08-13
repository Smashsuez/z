import nodemailer from "nodemailer";
import { html } from "./htmlEmail";

const sendEmail = async ({ to, url, text, data, subject }) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamedahmedgameel@gmail.com", // Use your custom domain email address here
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: "it@myzagel.com", // Use your custom domain email address here
    to,
    subject,
    html: html({ url, text, data }),
  };

  const result = await transporter.sendMail(mailOptions);
  return result;
};

export default sendEmail;
