class MathFunction { 
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    subtract() {
        return this.a + this.b;
    }

    multiply() {
        return this.a + this.b;
    }

    divide() {
        return this.a + this.b;
    }
}

const mathCalc2 = new MathFunction(10, 4);
console.log(mathCalc2.add());
console.log(mathCalc2.subtract())
console.log(mathCalc2.multiply())
console.log(mathCalc2.divide())

class Greetings {
    constructor(name) {
        this.name = name;
    }
    
    english() {
        return "Hello " + this.name;
    }
    
    spanish() {
        return "Hola " + this.name;
    }
    
    french() {
        return "Bonjour " + this.name;
    }
    
    arabic() {
        return "مرحبا " + this.name;
    }
}

const mathCalc = new MathFunction(5, 3);
console.log(mathCalc.add());

const greet = new Greetings("Josh");
console.log(greet.english());