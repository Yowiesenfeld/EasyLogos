// Import necessary modules and functions
const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./index'); // Import the generateLogo function

// Mock inquirer prompt
jest.mock('inquirer');

describe('generateLogo', () => {
  it('should generate an SVG file with the correct content', async () => {
    // Mock user input for inquirer.prompt
    inquirer.prompt.mockResolvedValueOnce({
      text: 'ABC',
      textColor: 'red',
      shape: 'circle',
      shapeColor: 'blue',
    });

    // Mock fs.writeFileSync 
    const writeFileSyncMock = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {});

    // Call the generateLogo function
    await generateLogo();

    // Check if fs.writeFileSync was called correctly
    expect(writeFileSyncMock).toHaveBeenCalledWith('logo.svg', expect.any(String));
  });
});
