class ShapeFactory {
  static createShape(type) {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'triangle':
        return new Triangle();
      case 'square':
        return new Square();
      default:
        throw new Error('Invalid shape type');
    }
  }
}

class Circle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    // Implement the SVG rendering logic for a circle
    // You can use the 'text', 'textColor', and 'this.color' properties here
  }
}

class Triangle {
  // Implement the Triangle class (similar to Circle)
}

class Square {
  // Implement the Square class (similar to Circle)
}

module.exports = ShapeFactory;
