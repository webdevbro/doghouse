/* CONSTRUCTOR FUNCTION */

class Person {
  constructor(name, pos) {
    this.name = name,
    this.position = pos
  }

  greet() {
    console.log(`Hello there! My name is ${this.name} and my favorite position is ${this.position}.`);
  }

}


export default Person;




/* old way of creating constructor functions */
/* function Person(name, pos) {
  this.name = name,
    this.position = pos,
    this.greet = function () {
      console.log(`Hello there! My name is ${this.name} and my favorite position is ${this.position}.`);
    }
} */

/* INHERITANCE for both Properties and Events */
/* class Adult extends Person {
  constructor(name, position, skin) {
    super(name, position),
      this.skin = skin
  }
  swallows() {
    console.log(`${this.name} swallows cum with a ${this.skin} skin doing ${this.position}.`);
  }
}

let ang = new Adult("Ango Whore", "doggie", "tanned");
// ang.greet();
ang.swallows();

let nata = new Person("Nata Slut", "missionary");
nata.greet(); */
