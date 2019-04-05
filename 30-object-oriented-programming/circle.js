class Circle {
  constructor(radius) {
    this.radius = radius
  }

  area() {
    return (this.radius * this.radius) * 3.1415
  }

  circumference() {
    return 2 * this.radius * 3.1415
  }
}
