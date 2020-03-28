"use strict";
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    add(object) {
        return new Complex(this.real + object.real, this.imaginary + object.imaginary);
    }
    subtract(object) {
        return new Complex(this.real - object.real, this.imaginary - object.imaginary);
    }
    modulo() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}
const first = new Complex(3, 4);
const second = new Complex(4, 6);
const summary = first.add(second);
console.log(summary.toString());
const subtraction = summary.subtract(second);
console.log(subtraction.toString());
const modulo = subtraction.modulo();
console.log(modulo.toString());
