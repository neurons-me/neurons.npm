// cleaker/src/server.js
//var connection = postgresql.createConnection({
//	host: 'localhost',
import express from 'express';
import fs from 'fs';
import https from 'https';
import http from 'http';
import { subdomainHandler, uniqueAssetIdentifier, captureSnapshot, dataSigning } from './cleakerFeatures.js';
import bodyParser from 'body-parser';
import socketIo from 'socket.io';

// SSL credentials
const privateKey = fs.readFileSync('/etc/letsencrypt/live/cleaker.me/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/cleaker.me/fullchain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Initialize express app
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// Subdomain handling
app.use(subdomainHandler);

// Cleaker features integration
app.get('/:username', (req, res) => {
  const username = req.params.username;
  const assetId = uniqueAssetIdentifier(username);
  const stateSnapshot = captureSnapshot();
  const userData = {
    // ...userData based on username, including digital asset information
  };

  if (userData.authenticated) {
    const signature = dataSigning('some data', userData);
    res.json({ assetId, stateSnapshot, signature });
  } else {
    res.status(401).send('User not authenticated');
  }
});

// HTTP and HTTPS servers
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

// Socket.io for real-time communication
const io = socketIo(httpsServer);

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  // Other socket.io events
});

// Listen on HTTP and HTTPS
const port = process.env.PORT || 80; // Heroku provides the port via environment variable
const securePort = process.env.SECURE_PORT || 443;

httpServer.listen(port, () => {
  console.log(`HTTP server running on port ${port}`);
});

httpsServer.listen(securePort, () => {
  console.log(`HTTPS server running on secure port ${securePort}`);
});

export default app;

    