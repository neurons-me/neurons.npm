// neuroverse.cli.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import inquirer from 'inquirer';
import Table from 'cli-table3';
import chalk from 'chalk';
import appCLI from './cli/app.cli.js'; // Import the app-specific CLI

// Resolve __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load apps data
const apps = JSON.parse(fs.readFileSync(path.resolve(__dirname, './data/apps.json'), 'utf-8')).apps;

// Placeholder function to get the status of the app
const getAppStatus = (appName) => {
  return 'Off'; // Example status; replace with actual logic if available
};

// Function to render the apps table
const renderAppsTable = (apps) => {
  const table = new Table({
    head: ['App Name', 'Status', 'Mode', 'Port'],
    colWidths: [20, 10, 15, 10],
  });

  apps.forEach(app => {
    const status = getAppStatus(app.name); // Placeholder for status
    table.push([app.name, status, 'Unknown', app.port]); // Default mode is 'Unknown'
  });

  console.log(table.toString());
};

// Main CLI function
export const startCLI = async () => {
  try {
    console.log(chalk.green(`
   .     .  .       .   . .   .  ..     .  .       .   . .   .  .
            .     .       .  .   . .   .   . .    +  .   .   . .   .  .
            .     .       .  .   . .   .   . .    +  .     .   . .   .  .
▗▖  ▗▖▗▄▄▄▖▗▖ ▗▖▗▄▄▖  ▗▄▖ ▗▖  ▗▖▗▄▄▄▖▗▄▄▖  ▗▄▄▖▗▄▄▄▖  .. :  -:::: .. :  -:::: 
▐▛▚▖▐▌▐▌   ▐▌ ▐▌▐▌ ▐▌▐▌ ▐▌▐▌  ▐▌▐▌   ▐▌ ▐▌▐▌   ▐▌    .. :  -:::: .. :  -::::
▐▌ ▝▜▌▐▛▀▀▘▐▌ ▐▌▐▛▀▚▖▐▌ ▐▌▐▌  ▐▌▐▛▀▀▘▐▛▀▚▖ ▝▀▚▖▐▛▀▀▘    .   . .   .  .   .   . .  
▐▌  ▐▌▐▙▄▄▖▝▚▄▞▘▐▌ ▐▌▝▚▄▞▘ ▝▚▞▘ ▐▙▄▄▖▐▌ ▐▌▗▄▄▞▘▐▙▄▄▖   .   . .   .  .   .   . .   .  .

.     .  .       .   . .   .  ..     .  .       .   . .   .  .   .   . .   .  .
 .     .       .  .   . .   .   . .    +  .   .   . .   .  .   .   . .   .  .
 .     .       .  .   . .   .   . .    +  .     .   . .   .  .   .   . .   .  .
 .     .  :     .    .. :. .___---------___.   .   . .   .  .   .   . .   .  .
      .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .  .  .    .   .   . .   .  .
  .  :       .  .  .:../:            . .^  :.:\.  .  .     .  . .  .
       .   . :: +. :.:/: .   .    .        . . .:\ .   .   .  .. :  -::::
.  :    .     . _ :::/:               .  ^ .  . .:\   .   . .   .  .
 .. . .   . - : :.:./.                        .  .:\   .   .   .  .. :  -::::
  .     .     . :..|:                    .  .  ^. .:|  .     .  .  .  .  .
  .       . : : .. ||        .                . . !:|    .   .   .  .. :  -::::
.     . . . ::. :: \(  $$                       . :)/   .   . .   .  .
.   .     : . : .:. |. $$$$$$              .$$$$$$::|  .   .   .  .. :  -::::
:.. .  :-  : .:  :  :|.$$$$$$$           ..$$$$$$$$:|   .   . .   .  .
      .  ..  .    .. :\ $$$$$$$$          :$$$$$$$$:/   .   .  .  .  .  .  .  .
   .      .+ ::   : -.:\ $$$$$$$$       .$$$$$$$$.:/   .   . .   .  .   .   . .   .  .
   .  .+   . .   . . :.:\. $$$$$$       $$$$$$$..:/  .  .   .  .  .  .  .  .  .
    :: .   . . . ::.:..:.\  $$       .   $$  ..:/   .   . .   .  .
 .     .   .  .. :  -::::.\.       | |     . .:/   .   .   .  .. :  -::::
      .  :  .  .  .-:.":.::.\             ..:/  .  :  .  .  .-:.":.::.
.        -.   . . . .: .:::.:.\.           .:/   .   . .   .  .
Welcome to the Neuroverse.:_:..:\   ___.  :/  .   .      .  .      .  .
           .   .:. .. .  .: :.:.:\       :/  .   .  .   .:. .. .  .: :.:.:
     +   .   .   : . ::. :.:. .:.|\   .:/|   .   . .   .  .
     .         +   .  .  ...:: ..|  --.:|   .   . .   .  .   .   . .   .  .
        .      . . .   ... :..:.."(  ..)"   .   .  .      .  .      .  .
         .   . .    :  .   .: ::/  .  .::\
       `));

  // Display the apps in a table format
  renderAppsTable(apps);

  // Prompt user to select an app
  const { selectedApp } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedApp',
      message: 'Select an app to manage:',
      choices: apps.map(app => app.name).concat(['Exit'])
    }
  ]);

  if (selectedApp === 'Exit') {
    console.log('Exiting Neuroverse...');
    process.exit();
  }

  // Find the selected app object
  const app = apps.find(a => a.name === selectedApp);
  if (app) {
    await appCLI(app); // Navigate to the app-specific CLI
    await startCLI(); // Return to the main CLI after exiting the app CLI
  } else {
    await startCLI(); // Go back to the main menu if no valid app is found
  }

} catch (error) {
  if (error.isTtyError) {
    console.error('Prompt couldn’t be rendered in the current environment');
  } else if (error.message.includes('User force closed the prompt')) {
    console.log('\nExiting Neuroverse...');
    process.exit(0);
  } else {
    console.error('An unexpected error occurred:', error);
  }
}
};

// Start the CLI
startCLI();