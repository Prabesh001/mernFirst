import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tamangadit86@gmail.com",
    pass: "zhvnhkqqkslbkyse",
  },
});

// function to send mail
const sendMail = async (email, otp) => {
  await transporter.sendMail(
    {
      from: '"Prabesh Dahal" <prabeshdaahal123@gmail.com>',
      to: email,
      subject: "Your Verification OTP.",
      html: `Your OTP code is <b>${otp}</b>`,
    }
  );
};

export { sendMail };
