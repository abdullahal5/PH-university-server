import nodemailer from "nodemailer";
import config from "../config";

export const SendEmail = async (to: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: config.NODE_ENV === "production",
    auth: {
      user: "abdullahalfahin183@gmail.com",
      pass: "njvx iwhw wdnm mxqo",
    },
  });

  await transporter.sendMail({
    from: "PH-University",
    to,
    subject: "Reset your password within 10 mins!",
    text: "",
    html,
  });
};
