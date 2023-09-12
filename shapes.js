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
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="100" r="50" fill="${this.color}" />
      <text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;

    return svg;
  }
}

class Triangle {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 100,150 200,150" fill="${this.color}" />
      <text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
    
    return svg;
  }
}

class Square {
  constructor() {
    this.color = '';
  }

  setColor(color) {
    this.color = color;
  }

  render(text, textColor) {
    const svg = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="200" fill="${this.color}" />
      <text x="150" y="120" fill="${textColor}" text-anchor="middle">${text}</text>
    </svg>`;
    
    return svg;
  }
}

module.exports = { ShapeFactory, Circle, Triangle, Square };
