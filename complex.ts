class Complex {
  readonly real: number;
  readonly imaginary: number;

  constructor(real: number, imaginary: number) {
    this.real = real;
    this.imaginary = imaginary;
  }

  add(object: Complex): Complex {
    return new Complex(
      this.real + object.real,
      this.imaginary + object.imaginary
    );
  }

  subtract(object: Complex): Complex {
    return new Complex(
      this.real - object.real,
      this.imaginary - object.imaginary
    );
  }

  modulo(): number {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }

  toString(): string {
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
