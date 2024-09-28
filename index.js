// neuroverse-start.js - Neuroverse starter script
const { exec } = require('child_process');
const pm2 = require('pm2');
const processConfig = require('./process.json'); // Assuming process.json is in the same directory

const isProduction = process.env.NODE_ENV === 'production';

// Function to start apps using PM2
function startApps() {
  pm2.connect((err) => {
    if (err) {
      console.error('Error connecting to PM2:', err);
      process.exit(2);
    }

    // Iterate through each app in the configuration
    processConfig.apps.forEach((app) => {
      const startScript = isProduction ? 'npm run start:prod' : 'npm run dev';
      const command = `cd ${app.cwd} && ${startScript}`;

      // Start each app using PM2
      pm2.start(
        {
          name: app.name,
          script: app.script,
          cwd: app.cwd,
          args: [],
          exec_mode: 'fork', // Can be set to 'cluster' if needed
          instances: 1,
          env: {
            NODE_ENV: isProduction ? 'production' : 'development',
            PORT: app.port || '', // Pass port from the config if specified
          },
        },
        (err, proc) => {
          if (err) {
            console.error(`Error starting ${app.name}:`, err);
            return;
          }
          console.log(`Started ${app.name} with PM2.`);
        }
      );
    });
  });
}

// Start all apps
startApps();