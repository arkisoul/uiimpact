class Patient {
  constructor() {
    this.name = 'John Doe'
  }

  getName() {
    return this.name
  }

  setName(name) {
    this.name = name
  }
}

module.exports = Patient;
// module.exports = new Patient();