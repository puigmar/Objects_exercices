let chuck = {
    firstName: "Chuck",
    lastName: "Norris",
    birthDate: new Date("1940-03-10"),
    jokes: [
      "Chuck Norris counted to infinity... Twice.",
      "Chuck Norris is the only man to ever defeat a brick wall in a game of tennis",
    ],
    displayInfo: function () {
      console.log(
        "My name is " +
          this.firstName +
          " " +
          this.lastName +
          " and I have " +
          this.jokes.length +
          " jokes!"
      );
    },
    getAge: function () {
      let today = new Date();
      let age = new Date(today - this.birthDate).getFullYear() - 1970;
      return age;
  
      // TODO
      // Hint: para obtener la hora actual, podemos usar: new Date()
      // Hint: para obtener el valor de birthDate, podemos usar: this.birthDate
      // Hint: podemos restar 2 fechas y obtendremos el número en milisegundos
  
      // No olvides consultar los métodos getFullYear(), getMonth() y getDate() en la documentación:
  
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    },
    addJoke: function (jokeString) {
      this.jokes.push(jokeString);
    },
    getRandomJoke: function () {
      return this.jokes[Math.floor(Math.random() * this.jokes.length)];
    },
  };
  
  chuck.displayInfo();
  
  console.log("getAge", chuck.getAge()); // Debería devolver 80 si estás en 2020
  
  chuck.addJoke("Chuck Norris can divide by zero.");
  console.log("getRandomJoke", chuck.getRandomJoke());
  chuck.addJoke("Chuck Norris kills flies with his gun.");
  console.log("getRandomJoke", chuck.getRandomJoke());
  chuck.addJoke("Chuck Norris was once in a knife fight, and the knife lost.");
  console.log("getRandomJoke", chuck.getRandomJoke());
  
  chuck.displayInfo();

  

///////////////////////////////////
// Monopoli

let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

class Player {
    // El constructor es el método llamado con la keyword `new`
    constructor(name, color) {
      this.name = name;
      this.color = color;
      this.position = 0;
      this.cash = squares[this.position];
    }
  
    // Método move
    move() {
      let dice = 1 + Math.floor(6 * Math.random());
      //console.log(dice);
      this.position = (this.position + dice) % squares.length;
      this.cash += squares[this.position];
      if (this.cash <= 0) {
        console.log(`Game over for ${this.name}.`);
      }
    }
  
    // Método displayInfo
    displayInfo() {
      console.log(
        `${this.name} is at position ${this.position} and has ${this.cash}€`
      );
    }
  }
  
  // --- Inicialización de los jugadores ---
  let player1 = new Player("Joaquim", "red");
  let player2 = new Player("Maxence", "blue");
  let player3 = new Player("Mostafa", "black");
  
  // --- Turno 1  ---
  player1.move();
  player2.move();
  player3.move();
  
  // --- Turno 2  ---
  player1.move();
  player2.move();
  player3.move();
  
  player1.displayInfo();
  player2.displayInfo();
  player3.displayInfo();


///////////////////////////////////
// Rectangulos y cuadrados

class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  calculateArea() {
    return this.x * this.y;
  }

  calculatePerimeter() {
    return this.x * 2 + this.y * 2;
  }
}

class Square extends Rectangle {
  constructor(x) {
    super(x);
  }

  calculateArea() {
    return (this.x *= this.x);
  }

  calculatePerimeter() {
    return this.x * 4;
  }
}

let r1 = new Rectangle(6, 7);
console.log("Perimeter of r1 =", r1.calculatePerimeter()); // 26
console.log("Area of r1 =", r1.calculateArea()); // 42

var s1 = new Square(5);
console.log("Perimeter of s1 =", s1.calculatePerimeter()); // 20
console.log("Area of s1 =", s1.calculateArea()); // 25

var s2 = new Square(10);
console.log("Perimeter of s2 =", s2.calculatePerimeter()); // 40
console.log("Area of s2 =", s2.calculateArea()); // 100