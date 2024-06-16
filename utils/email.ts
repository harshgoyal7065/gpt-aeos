import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass:  process.env.NODEMAILER_PASSWORD,
  },
});

const sendEmail = async (to: string, emailOtp: string) => {
  const mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to,
    subject: "Aeosgpt - Email Verification",
    html: `<p>Your OTP to verify your account is <b>${emailOtp}</b></p>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
