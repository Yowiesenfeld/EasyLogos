const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should set color correctly', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.color).toBe('green');
  });

  const { Circle, Triangle, Square } = require('./shapes');

  describe('Circle', () => {
    it('should set color correctly', () => {
      const circle = new Circle();
      circle.setColor('green');
      expect(circle.color).toBe('green');
    });
  
    it('should render SVG correctly', () => {
      const circle = new Circle();
      circle.setColor('blue');
  
      const svg = circle.render('ABC', 'red');
  
      expect(svg).toContain('<circle');
      expect(svg).toContain('fill="blue"');
      expect(svg).toContain('fill="red"');
      expect(svg).toContain('ABC');
    });
  });
  
  describe('Triangle', () => {
    it('should set color correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('yellow');
      expect(triangle.color).toBe('yellow');
    });
  
    it('should render SVG correctly', () => {
      const triangle = new Triangle();
      triangle.setColor('green');
  
      const svg = triangle.render('XYZ', 'blue');
  
      expect(svg).toContain('<polygon');
      expect(svg).toContain('fill="green"');
      expect(svg).toContain('fill="blue"');
      expect(svg).toContain('XYZ');
    });
  });
  
  describe('Square', () => {
    it('should set color correctly', () => {
      const square = new Square();
      square.setColor('red');
      expect(square.color).toBe('red');
    });
  
    it('should render SVG correctly', () => {
      const square = new Square();
      square.setColor('purple');
  
      const svg = square.render('123', 'green');
  
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="purple"');
      expect(svg).toContain('fill="green"');
      expect(svg).toContain('123');
    });
  });
})