import { procesarEnvioCorreo } from "../servicios/ServicioCorreo.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  
  try {
    const { email, tipo } = req.body;

    if (!email || !tipo) {
      return res.status(400).json({
        error: "Faltan datos requeridos",
      });
    }

    await procesarEnvioCorreo(email, tipo);

    return res.status(200).json({
      mensaje: "Correo enviado correctamente",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}
