class Point {
  constructor(xx, yy) {
    this._xx = xx
    this._yy = yy
  }

  static distance(x1, y1, x2, y2) {
    let dx = x1 - x2
    let dy = y1 - y2
    return Math.sqrt(dx * dx + dy * dy)
  }
}