// Your code here
class Polygon {
  constructor(array) {
    this.sides = array
  }

  get getCount() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((sum, currentSide) => sum + currentSide, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    function checkSides() {
      const perimeter = this.perimeter
      return this.sides.some((side) => (perimeter - side) <= side)
    }

    if (this.getCount !== 3) {
      return false
    } else if (checkSides.call(this)) {
      return false
    } else {
      return true
    }
  }
}

class Square extends Polygon {
  get isValid() {
    function checkSides() {
      const sideLength = this.sides[0]
      return this.sides.some((side) => side !== sideLength)
    }

    if (this.getCount !== 4) {
      return false
    } else if (checkSides.call(this)) {
      return false
    } else {
      return true
    }
  }

  get area() {
    return this.sides[0] ** 2
  }
} 