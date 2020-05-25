/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { orderByProps, getSpecials } from './module';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};
const testprops = {
  a: 4,
  b: 3,
  c: 'xxx',
  d: 5,
  e: 1,
};

orderByProps(obj, ['name', 'level']);

const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
};

getSpecials(character, 1);

console.log(orderByProps(testprops));
