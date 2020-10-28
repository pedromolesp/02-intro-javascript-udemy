import { getHeroeById } from './bases/08-imports';
import heroes from './data/heroes';
// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve();
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No manejado');
//     }, 2000);
// });


// promesa.then((heroe) => {
//     console.log(heroe);
// }).catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            const heroe = getHeroeById(id);
            if (heroe) {

                resolve(heroe);
            } else {
                reject("El heroe no ex");

            }

        }, 2000);
    });
}
getHeroeByIdAsync(4).then(console.log).catch(console.warn);