jest.mock('inquirer', () => ({
  prompt: jest.fn(),
}));

const { generateLogo } = require('./index').default;
const fs = require('fs');const inquirer = require('inquirer');


// Mock inquirer prompt
jest.mock('inquirer');

describe('generateLogo', () => {
  it('should generate an SVG file with the correct content', async () => {
    // Mock user input
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

    // see if fs.writeFileSync was called correctly
    expect(writeFileSyncMock).toHaveBeenCalledWith('logo.svg', expect.any(String));
  });
});
