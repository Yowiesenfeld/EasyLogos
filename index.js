const inquirer = require('inquirer');
const fs = require('fs');
const { ShapeFactory } = require('./shapes'); // get stuff from shapes

// function to generate the logo
async function generateLogo() {
  try {
    const userInput = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the text:',
        validate: (input) => {
          return input.length <= 3;
        },
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (keyword or hexadecimal):',
      },
    ]);

    const { text, textColor, shape, shapeColor } = userInput;

    // Create a new shape
    const shapeInstance = ShapeFactory.createShape(shape);
    shapeInstance.setColor(shapeColor);

    // Generate the SVG content
    const svgContent = shapeInstance.render(text, textColor);

    // Write the SVG content to a file
    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

generateLogo();
