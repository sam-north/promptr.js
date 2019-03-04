export class Bling {
    momma: string = 'woot';
    dad: string;
    constructor() {
        console.log('bling');
        this.dad = 'salm';
    }

    parentNames() {
        console.log('bling printParentNames');
        let parents = this.momma + ' ' + this.dad + ' North';
        return parents;
    }
}