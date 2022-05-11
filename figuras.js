console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

let perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

let areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cm^2");

console.groupEnd();

console.group("Triángulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
let alturaTriangulo = Math.sqrt((ladoTriangulo1 ** 2) - ((ladoTriangulo3/2) ** 2))
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + ladoTriangulo3 + " cm");

let perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("El perímetro del triángulo mide: " + perimetroTriangulo + " cm")

let areaTriangulo = 1/2 * ladoTriangulo3 * alturaTriangulo;
console.log("El área del triángulo mide: " + areaTriangulo + " cm^2")

console.groupEnd();


console.group("Círculo");

const radio = 4;
let diametro = 4*2;
let PI = Math.PI;

let perimetroCirculo = Math.round(diametro * PI);
console.log("El perímetro del círculo mide: " + perimetroCirculo + " cm")

let areaCirculo = Math.round((radio**2) * PI);
console.log("El área del círculo mide: " + areaCirculo + " cm^2")

console.groupEnd();