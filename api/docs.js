// Endpoint para la documentacion Swagger
// Accede a /api/docs para ver la documentacion interactiva
// Se accede mediante /api/docs para ver la documentacion interactiva

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerDocument = YAML.load(path.join(process.cwd(), 'swagger.yaml'));
const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";

export default function handler(req, res) {
  try {
    // Generamos el HTML pasando el link del CSS externo
    const html = swaggerUi.generateHTML(swaggerDocument, {
      customCssUrl: CSS_URL
    });
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: "Error renderizando docs", details: error.message });
  }
}
