import { plantillaBienvenido } from "../plantillas/PlantillaBienvenido.js";
import { enviarCorreo } from "../utilidades/ConfiguracionCorreo.js";

export const procesarEnvioCorreo = async (email, tipo) => {
  let contenido;

  switch (tipo) {
    case "bienvenida":
      contenido = plantillaBienvenido();
      break;

    case "compra":
      contenido = {
        subject: "Compra realizada",
        text: "Tu compra fue exitosa.",
      };
      break;

    case "inicio_sesion":
      contenido = {
        subject: "Inicio de sesion en QZ Motor Center",
        text: "Se inicio sesion correctamente en tu cuenta de QZ Motor Center.",
      };
      break;

    default:
      throw new Error("Tipo de correo no valido");
  }

  const mensaje = {
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL || "tutienda@email.com",
    subject: contenido.subject,
    text: contenido.text,
  };

  return await enviarCorreo(mensaje);
};
