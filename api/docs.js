// Endpoint para la documentacion Swagger
// Accede a /api/docs para ver la documentacion interactiva
// Se accede mediante /api/docs para ver la documentacion interactiva

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(process.cwd(), '../..swagger.yaml'));

export default function handler(req, res) {
  // Configuracion de Swagger UI
  const html = swaggerUi.generateHTML(swaggerDocument);
  res.send(html);
}
