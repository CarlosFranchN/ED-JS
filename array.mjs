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

Array.prototype.inverter = function () {
  let aux
  let length = this.length - 1

  for (let i = 0; i <= this.length / 2; i++) {
    aux = this[i]

    this[i] = this[length - i]
    this[length - i] = aux
  }
}

for (let i = 1; i <= 7; i++) {
  numbs.insertNumb(i)
}
console.log(...numbs)
numbs.inverter()
console.log(...numbs)
