import nodemailer from "nodemailer";
import constant from "../config/constant.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: constant.EMAIL_USER,
    pass: constant.EMAIL_PASS,
  },
});

// function to send mail
const sendMail = async (email, otp) => {
  await transporter.sendMail({
    from: `"Prabesh Dahal" <${constant.EMAIL_USER}>`,
    to: email,
    subject: "Your Verification OTP.",
    html: `Your OTP code is <b>${otp}</b>`,
  });
};

export { sendMail };
