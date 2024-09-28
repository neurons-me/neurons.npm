// pm2.config.js
const fs = require('fs');
const path = require('path');
// Load apps configuration from apps.json
const appsConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/apps.json'), 'utf-8'));
// Convert the apps configuration to PM2 format
const pm2Apps = appsConfig.apps.map(app => ({
  name: app.name,
  script: `../apps/${app.name}/index.js`,
  cwd: `../apps/${app.name}`,
  watch: true,
  env: {
    NODE_ENV: 'production',
    PORT: app.port // Pass the port from apps.json
  }
}));

module.exports = {
  apps: pm2Apps,
};