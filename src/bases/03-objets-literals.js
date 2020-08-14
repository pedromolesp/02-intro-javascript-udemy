const persona = {
    nombre: "Pedro",
    apellido: "Moli",
    edad: 26,
    direccion: {
        ciudad: "New York",
        zip: 79872342,
        lat: 12.34456,
        lon: 23.4234
    }
};

console.log(persona);


const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona2);
console.log(persona);

