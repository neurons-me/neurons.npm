// neuroverse/src/cli/app.cli.js
import inquirer from 'inquirer';
import chalk from 'chalk';
import Table from 'cli-table3';
import { spawn } from 'child_process';

/* Get the status of the app using PM2 */
const getAppStatus = (appName) => {
  try {
    const status = spawnSync(`npx pm2 show ${appName} --silent | grep status`, { encoding: 'utf8', shell: true });
    if (status.stdout.includes('online')) {
      return 'Running';
    } else if (status.stdout.includes('stopped')) {
      return 'Stopped';
    } else {
      return 'Unknown';
    }
  } catch (error) {
    return 'Off';
  }
};

// Function to render app details in a table without truncating content
const renderAppDetailsTable = (app) => {
    const table = new Table({
      wordWrap: true,
      colWidths: [20, 80],
    });
  
    table.push(
      [chalk.green('Name'), app.name],
      [chalk.green('Status'), getAppStatus(app.name)],
      [chalk.green('Port'), app.port],
      [chalk.green('Domains'), app.domains.join('\n')],  // Use '\n' to display each domain in a new line
      [chalk.green('Media'), app.media.join('\n')]       // Use '\n' to display each media in a new line
    );
  
    console.log(table.toString());
  };

// Function to start the app in Development Mode
const startAppInDevMode = async (app) => {
    console.log(chalk.green(`Starting ${app.name} in Development Mode...`));
    // Use the development scripts defined in the app's package.json and pass the port
    const devProcess = spawn(`npm`, ['run', 'dev'], {
      cwd: `apps/${app.name}`,
      shell: true,
      stdio: 'inherit',
      env: { ...process.env, PORT: app.port }, // Pass the port from apps.json
    });
  
    devProcess.on('close', (code) => {
      console.log(chalk.yellow(`${app.name} development process exited with code ${code}`));
      renderAppDetailsTable(app);
      appCLI(app);
    });
  };
// Function to start the app in Production Mode
const startAppInProductionMode = async (app) => {
    console.log(chalk.green(`Starting ${app.name} in Production Mode...`));
    // Use PM2 to start the app in production mode and pass the port
    const prodProcess = spawn(`npx`, ['pm2', 'start', `apps/${app.name}/index.js`, '--name', app.name, '--env', 'production'], {
      shell: true,
      stdio: 'inherit',
      env: { ...process.env, PORT: app.port }, // Pass the port from apps.json
    });
  
    prodProcess.on('close', (code) => {
      console.log(chalk.green(`${app.name} started in Production Mode with exit code ${code}`));
      renderAppDetailsTable(app);
      appCLI(app);
    });
  };
// Function to pause the app
const pauseApp = async (app) => {
  console.log(chalk.yellow(`Pausing ${app.name}...`));
  const pauseProcess = spawn(`npx`, ['pm2', 'stop', app.name], {
    shell: true,
    stdio: 'inherit',
  });

  pauseProcess.on('close', (code) => {
    console.log(chalk.yellow(`${app.name} paused with exit code ${code}`));
    renderAppDetailsTable(app);
    appCLI(app);
  });
};

// Function to view app logs and handle returning to the app menu
const viewAppLogs = (app) => {
  console.clear();
  console.log(chalk.blue(`\nViewing logs for ${app.name}. Press Ctrl+C to return to the app menu.\n`));
  const logsProcess = spawn('npx', ['pm2', 'logs', app.name], {
    stdio: 'inherit',
    shell: true,
  });

  // Define handler for exiting logs and returning to the app menu
  const exitLogs = () => {
    logsProcess.kill('SIGINT'); // Terminate the logs process
    console.log(chalk.yellow(`\nExited logs view for ${app.name}. Returning to the app menu...`));
    process.off('SIGINT', exitLogs); // Remove the listener after exiting logs view
    setTimeout(() => appCLI(app), 100); // Go back to the app-specific CLI
  };

  // Attach the handler when viewing logs
  process.on('SIGINT', exitLogs);
};

// Handle the app-specific CLI
const appCLI = async (app) => {
  console.clear(); // Clear previous logs or messages to focus on the current table
  console.log(chalk.blue(`\nApp Details for ${app.name}`));
  renderAppDetailsTable(app);

  // Define app management actions
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: `Manage ${app.name}:`,
      choices: ['Start in Dev Mode', 'Start in Production Mode', 'Pause', 'App Logs', 'Back to Main Menu'],
    },
  ]);

  // Handle the selected action
  switch (action) {
    case 'Start in Dev Mode':
      await startAppInDevMode(app);
      break;
    case 'Start in Production Mode':
      await startAppInProductionMode(app);
      break;
    case 'Pause':
      await pauseApp(app);
      break;
    case 'App Logs':
      viewAppLogs(app);
      break;
    case 'Back to Main Menu':
      console.log(chalk.blue('Returning to Main Menu...'));
      break;
    default:
      console.log(chalk.red('Invalid action selected.'));
  }
};

export default appCLI;