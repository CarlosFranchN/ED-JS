export class Stack {
  constructor() {
    this.count = 0
    this.items = {}
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }
  tamanho() {
    return this.count
  }
  vazio() {
    return this.count == 0
  }

  topo() {
    if (this.vazio()) {
      return undefined
    }
    return this.items[this.count - 1]
  }
}

const stack = new Stack()
