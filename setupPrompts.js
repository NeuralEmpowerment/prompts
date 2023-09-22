const fs = require('fs');
const path = require('path');

// Function to initialize the .prompts directory and update .gitignore
const setupPrompts = () => {
  // Get the current working directory
  const cwd = process.cwd();

  // Check if .prompts directory exists, if not create it
  const promptsDirPath = path.join(cwd, '.prompts');
  if (!fs.existsSync(promptsDirPath)) {
    fs.mkdirSync(promptsDirPath);
  }

  // Check if .gitignore exists, if not create it and add .prompts/
  const gitignorePath = path.join(cwd, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, '');
  }

  // Append .prompts/ to .gitignore
  // NOTE: We use fs.appendFileSync so that we don't overwrite the existing .gitignore
  fs.appendFileSync(gitignorePath, '\n.prompts/\n');

  // Copy prompt files from package's 'prompts/' directory to the .prompts/ directory in the current working directory
  const packagePromptsDir = path.join(__dirname, 'prompts');
  fs.readdirSync(packagePromptsDir).forEach(file => {
    const sourcePath = path.join(packagePromptsDir, file);
    const destPath = path.join(promptsDirPath, file);
    fs.copyFileSync(sourcePath, destPath);
  });
};

module.exports = setupPrompts;
