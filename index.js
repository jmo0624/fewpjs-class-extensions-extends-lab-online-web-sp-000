// Your code here
class Polygon{
  constructor(array){
    this.array = array
    this.count = this.array.length
  }
  get getCount(){
    return this.array.length
  }
  get perimeter(){
    const add = (accumulator, currentValue) => accumulator + currentValue;
    return this.array.reduce(add,0)
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (!Array.isArray(this.array )) return;
    if (this.count != 3 ) return;
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    return (( side1 == side2 ) && ( side1 == side3 ) && ( side2 == side3 ))
  }
}

class Square extends Polygon{
  get isValid(){
    if (!Array.isArray(this.array)) return;
    if (this.count != 4 ) return;
    let side1 = this.array[0]
    let side2 = this.array[1]
    let side3 = this.array[2]
    let side4 = this.array[3]
    return ((side1==side2)&&(side1==side3)&&(side1==side4))
  }

  get area(){
    return this.array[0]*this.array[0]
  }
}