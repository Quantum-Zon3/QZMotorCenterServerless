import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const enviarCorreo = async (datosCorreo) => {
  return await sgMail.send(datosCorreo);
};