import { Person } from './person';

export class Player implements Person {
    name: string;
    highScore: number;
    sai : string
    formatName() {
        return this.name.toUpperCase();
    }
}