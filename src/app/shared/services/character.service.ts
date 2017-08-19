import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ApiService } from './api.service';
import { Character } from '../models';

@Injectable()
export class CharacterService {

    //private charactersUrl = 'api/characters' //URL to web API
    private charactersUrl = 'http://localhost:3000/api/characters' //URL to web API
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getCharacters(): Promise<Character[]> {
        return this.http.get(this.charactersUrl)
            .toPromise()
            .then(response => response.json().data as Character[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error happened', error);
        return Promise.reject(error.message || error);
    }
    getCharacter(id: number): Promise<Character> {
        const url = `${this.charactersUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Character)
            .catch(this.handleError);
    }
    update(character: Character): Promise<Character> {
        const url = `${this.charactersUrl}/${character.id}`;
        return this.http
            .put(url, JSON.stringify(character), { headers: this.headers })
            .toPromise()
            .then(() => character)
            .catch(this.handleError);
    }
    create(race: string, subRace: string, charClass: string, name: string, level: number): Promise<Character> {
        return this.http
            .post(this.charactersUrl, JSON.stringify({ race: race, subRace: subRace, class: charClass, name: name, level: level, true: status }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Character)
            .catch(this.handleError)
    }
    delete(id: number): Promise<void> {
        const url = `${this.charactersUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}