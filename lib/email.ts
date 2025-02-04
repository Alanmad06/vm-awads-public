import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendVerificationEmail(email : string, code : string) {
  await transporter.sendMail({
    from: '"Tu App" <no-reply@tuapp.com>',
    to: email,
    subject: "Verifica tu correo",
    text: `Tu código de verificación es: ${code}`,
    html: `<p>Tu código de verificación es: <strong>${code}</strong></p>`,
  });
}
