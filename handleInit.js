const fs = require('fs');
const path = require('path');

// Read package.json to get the package name
const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const packageName = packageJSON.name;

// Function to handle CLI commands
const handleInit = (args, initFunction) => {
  // The first argument is the Node.js executable, the second is the path to the script, so we skip those.
  const [, , command] = args;

  // Check if the user has entered 'init'
  if (command === 'init') {
    initFunction();
  } else {
    console.log(`Invalid command. Use "npx ${packageName} init" to initialize.`);
  }
};

module.exports = handleInit;
