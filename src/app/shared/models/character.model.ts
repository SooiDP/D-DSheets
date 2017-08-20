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
        console.log(this.name + ' json test')
        return {
            "race": this.race,
            "subRace": this.subRace,
            "name": this.name,
            "class": this.class,
            "level": this.level
        }
    }
}