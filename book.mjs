export default class Book {
  constructor(title) {
    this._title = title
  }
  get title() {
    return this._title
  }
  set title(value) {
    return (this._title = value)
  }

  printTitle() {
    console.log(this.title)
  }
}
