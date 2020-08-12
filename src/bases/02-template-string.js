const nombre = "Pedro";
const apellido = "Molina";

// const nombreCompleto = nombre + " " + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return "Hola " + nombre;
}
console.log(`Este es el saludo ${getSaludo(nombre)}`);