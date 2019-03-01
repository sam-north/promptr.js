const world = '🗺️';

export function hello(word: string = world): string {
    return `Hello ${world}! `;
}

let test: number = 15;
let texty: number = 555;

let sum: number = test + texty + texty * 2;
console.log('sum: ' + sum);
