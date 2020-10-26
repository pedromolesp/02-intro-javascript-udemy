import { heroes } from './data/heroes';

// console.log(heroes);

const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);
// console.log(getHeroeById(4));

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner("Marvel"));
