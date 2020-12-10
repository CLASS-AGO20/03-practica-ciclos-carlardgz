export default class App {
  factorial(numero) {
    let multiplicacion = 1;
    for (let i = 1; i <= numero; i++) {
      multiplicacion = multiplicacion * i;
    }
    return multiplicacion;
  }

  convertirAString(numero) {
    let cadena = "";
    let i = 1;

    while (i <= numero) {
      cadena += "*";
      i++;
    }

    return cadena;
  }

  obtenerDivisibles(numero) {
    let i = 1;
    let suma = 0;

    do {
      if (numero % i === 0) {
        suma = suma + 1;
        i++;
      } else {
        i++;
      }
    } while (i <= numero);

    return suma;
  }

  elevar(numero, potencia) {
    let resultado = 1;
    for (let i = 1; i <= potencia; i++) {
      resultado = resultado * numero;
    }

    return resultado;
  }
}

let app = new App();
console.log(app.factorial(5));
console.log(app.convertirAString(5));
console.log(app.obtenerDivisibles(6));
console.log(app.elevar(3, 4));
