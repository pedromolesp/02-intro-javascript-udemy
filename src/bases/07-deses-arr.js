const personajes = ['Pepe', 'Paco', 'Juanito'];
const [, , p3] = personajes;
console.log(
    p3
);
const retornArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornArreglo();
console.log(
    letras, numeros
);

const useState = (valor) => {
    return [valor, () => { console.log('Hola mundo'); }];
}

const arr = useState('Pedro');
const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();