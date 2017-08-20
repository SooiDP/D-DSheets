import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Character } from '../models';

@Injectable()
export class CharacterService {

    constructor(
        private apiService: ApiService
    ) { }

    getCharacters(): Promise<Character[]> {
        return this.apiService.get('/characters').toPromise().then(res => res.characters);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error happened', error);
        return Promise.reject(error.message || error);
    }
    getCharacter(slug: string): Promise<Character> {
        return this.apiService.get('/characters/' + slug)
            .toPromise()
            .then(response => {
                return this.resToChar(response.character);
            })
            .catch(this.handleError)
    }
    update(character: Character): Promise<Character> {
        return this.apiService
            .put('/characters/' + character.slug, { "character": character.toJSON() })
            .toPromise()
            .then(response => {
                return this.resToChar(response.character);
            })
            .catch(this.handleError)
    }

    create(character: Character): Promise<Character> {
        console.log(character.name + "  test 2");
        console.log(character.toJSON())
        return this.apiService
            .post('/characters/characters', {"character": character.toJSON()})
            .toPromise()
            .then(res => { return this.resToChar(res.character) })
            .catch(this.handleError)
    }

    delete(slug: string) {
        return this.apiService.delete('/characters/characters/' + slug)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
    private resToChar(resChar): Character {

        let character = new Character();

        character.class = resChar.class;
        character.level = resChar.level;
        character.name = resChar.name;
        character.race = resChar.race;
        character.subRace = resChar.subRace;

        console.log(character.name + 'restochar')

        return character;
    }
}