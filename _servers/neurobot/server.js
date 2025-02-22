// server.js
import { fileURLToPath } from 'url'; // Necesario para construir __dirname
import path from 'path'; // Para manejar rutas
import express from 'express';
import session from 'express-session';
import routes from './src/routes.js'; // Importamos el router
const app = express();
const PORT = 6868;
// Construir __dirname manualmente
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware para manejar JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Esto procesa formularios HTML
// Configuración de sesión
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Cambiar a true si usas HTTPS
  })
);
// Usar el router para manejar todas las rutas
app.use('/', routes);
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});