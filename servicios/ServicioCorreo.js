import { enviarCorreo } from "../utilidades/ConfiguracionCorreo.js";
import { plantillaBienvenido } from "../plantillas/PlantillaBienvenido.js";

export const procesarEnvioCorreo = async (email, tipo) => {
  let contenido;

  switch (tipo) {
    case "bienvenida":
      contenido = plantillaBienvenido();
      break;

    case "compra":
      contenido = {
        subject: "Compra realizada",
        text: "Tu compra fue exitosa 🚗🏍️",
      };
      break;

    default:
      throw new Error("Tipo de correo no válido");
  }

  const mensaje = {
    to: email,
    from: "tutienda@email.com",
    subject: contenido.subject,
    text: contenido.text,
  };

  return await enviarCorreo(mensaje);
};