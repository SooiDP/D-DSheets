import { User } from './user.model'; 

export class Character {
    slug: string;
    race: string;
    subRace: string;
    class: string;
    name: string;
    level: number;

    

    public toJSON(): Object {
        console.log("json gehaald");
        return {
            "race": this.race,
            "subRace": this.subRace,
            "class": this.class,
            "name": this.name,
            "level": this.level
        }
    }
}