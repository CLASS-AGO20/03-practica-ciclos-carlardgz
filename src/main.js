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
}

let app = new App();
console.log(app.factorial(5));
console.log(app.convertirAString(5));
