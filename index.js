const inquirer = require('inquirer');
const fs = require('fs');
const ShapeFactory = require('./lib/shapes'); // Assuming you have a ShapeFactory class

async function generateLogo() {
  try {
    





                         
    // Create a new shape using the ShapeFactory
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
