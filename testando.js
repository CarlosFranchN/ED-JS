function isEven(x) {
  console.log(x)
  return x % 2 === 0 ? true : false
}

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let iterator = number[Symbol.iterator]()

console.log(iterator.next().value)

let aEntries = number.entries()
let aKey = number.keys()
let even = Array.from(number, x => x % 2 == 0)
let number2 = Array.of(2, 4, 6, 8)
let number3 = Array(6).fill(1)

console.log(aEntries.next().value)
console.log(aKey.next())
console.log(...number2.fill(1, 1, 3))
console.log(...number3)
