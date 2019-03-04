import '../css/index.scss';
import { Bling } from './bling';
import { Stuff } from './stuff';
const world = '🗺️';
export function hello(word: string = world): string {
    return `Hello ${world}! `;
}

let test: number = 15;
let texty: number = 555;

let sum: number = test + texty + texty * 2;
console.log('sum: ' + sum);

let bling = new Bling();
let parents = bling.parentNames();
console.log(parents);

let stuff = new Stuff();
let multiplied = stuff.multiply(test, texty);
console.log(multiplied);

console.log(hello());