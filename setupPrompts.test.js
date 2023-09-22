const setupPrompts = require('./setupPrompts');
const fs = require('fs');
const path = require('path');

// Create a backup of .gitignore if it exists
const gitignorePath = path.join(process.cwd(), '.gitignore');
if (fs.existsSync(gitignorePath)) {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
  fs.writeFileSync(`${gitignorePath}-tmp`, gitignoreContent);
}

test('it should create .prompts directory and update .gitignore', () => {
  // Invoke setupPrompts
  setupPrompts();

  // Check if .prompts directory is created
  const promptsDir = path.join(process.cwd(), '.prompts');
  expect(fs.existsSync(promptsDir)).toBe(true);

  // Check if .prompts/ is added to .gitignore
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf-8');
  expect(gitignoreContent.includes('.prompts/')).toBe(true);
});

// Teardown: Delete the .prompts directory and restore .gitignore
afterAll(() => {
  const promptsDir = path.join(process.cwd(), '.prompts');
  fs.rmdirSync(promptsDir, { recursive: true });

  // Restore .gitignore from backup
  if (fs.existsSync(`${gitignorePath}-tmp`)) {
    const gitignoreBackupContent = fs.readFileSync(`${gitignorePath}-tmp`, 'utf-8');
    fs.writeFileSync(gitignorePath, gitignoreBackupContent);
    fs.unlinkSync(`${gitignorePath}-tmp`);
  } else {
    // If there was no .gitignore, delete the created one
    if (fs.existsSync(gitignorePath)) {
      fs.unlinkSync(gitignorePath);
    }
  }
});
