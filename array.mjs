const numbs = []

Array.prototype.insertFirstPos = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1]
  }
  this[0] = value
}

Array.prototype.insertNumb = function (value) {
  this[this.length] = value
}

Array.prototype.insertNumbPos = function (value, pos) {
  this.insertNumb(value)
  let number
  for (let i = this.length - 1; i >= pos; i--) {
    number = this[i]
    this[i] = this[i - 1]
    this[i - 1] = number
  }
}
Array.prototype.removeFirstPos = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1]
  }
  this.length = this.length - 1
}

Array.prototype.removePos = function () {
  this.length = this.length - 1
}

Array.prototype.removePosN = function (value) {
  for (let i = value - 1; i < this.length; i++) {
    if (value == 1) {
      this.removeFirstPos()
    }
    if (value == this.length) {
      this.removePos()
    } else {
      this[i] = this[i + 1]
      this.length = this.length - 1
    }
  }
}

numbs.push(11)
console.log(...numbs)
numbs.push(12)
console.log(...numbs)
numbs.push(13)
console.log(...numbs)
numbs.push(14)
console.log(...numbs)
numbs.insertFirstPos(10)

console.log(...numbs)
numbs.insertNumb(15)

console.log(...numbs)
numbs.insertNumb(16)
console.log(...numbs)
numbs.removeFirstPos()
console.log(...numbs)
numbs.removePos()
console.log(...numbs)
numbs.removePosN(2)

console.log(...numbs)
numbs.insertNumbPos(12, 1)
console.log(...numbs)
