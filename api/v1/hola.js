// Endpoint con respuesta json 
export default function handler(req, res) {
  const mensaje = process.env.MENSAJE_BIENVENIDA || 'Bienvenido a la version 1 de mi api';
  
  // Responder con codigo 200 en forma json
  res.status(200).json({
    mensaje: mensaje
  });
}
