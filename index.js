const handleInit = require('./handleInit');
const setupPrompts = require('./setupPrompts');

// Pass the command-line arguments and init function to the handleCommands function
handleInit(process.argv, setupPrompts);
