//Desestructuración

const persona = {
    nombre: "Pedro",
    edad: 43,
    clave: "Ironman",
    rango: "Soldado"
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);
const useContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.9234,
            lon: -2.341412
        }
    };

};
const avenger = useContext(persona);
console.log(avenger);
const { nombreClave, anios, latlng: {
    lat, lon
} } = avenger;
console.log(nombreClave, anios);

console.log(lat, lon);
