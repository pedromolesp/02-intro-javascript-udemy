const saludar = function (nombre) {
  return `Hola, ${nombre}`;
}
const saludar2 = (nombre) => { return `Hola, ${nombre}`; }


const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola mundo`;


console.log(saludar2('Pedrete'));
console.log(saludar3('Pedreteeeee'));
console.log(saludar4());

const getUser = () => ({
  uid: "dasf234",
  username: "gary"

});
const user = getUser();
console.log(user);

const getUsuarioActivo = (nombre) => ({

  uid: 'ABC567',
  username: nombre

});

const usuarioActivo = getUsuarioActivo('Pedro');
console.log(usuarioActivo);