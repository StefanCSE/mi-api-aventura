// Endpoint para la documentacion Swagger
// Accede a /api/docs para ver la documentacion interactiva
// Se accede mediante /api/docs para ver la documentacion interactiva

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const swaggerPath = path.resolve(process.cwd(), 'swagger.yaml');
const swaggerDocument = YAML.load(swaggerPath);

const CSS_URL = "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui.min.css";
const JS_URLS = [
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-bundle.js",
  "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.15.5/swagger-ui-standalone-preset.js"
];

export default function handler(req, res) {
  try {
    // Generamos el HTML inyectando los links a los CDNs externos
    const html = swaggerUi.generateHTML(swaggerDocument, {
      customCssUrl: CSS_URL,
      customJs: JS_URLS
    });
    
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: "Error al cargar la documentación", details: error.message });
  }
}