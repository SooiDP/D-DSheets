import { User } from './user.model'; 

export class Character {
    id: number;
    race: string;
    subRace: string;
    class: string;
    name: string;
    level: number;
    creator: User;
}