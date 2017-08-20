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
        return this.apiService.get('/characters/')
            .toPromise()
            .then(response => response.json().data as Character[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error happened', error);
        return Promise.reject(error.message || error);
    }
    getCharacter(slug): Promise<Character> {
        return this.apiService.get('/characters/' + slug)
            .toPromise()
            .then(response => response.json().data as Character)
            .catch(this.handleError);
    }
    update(character): Promise<Character> {
        return this.apiService
            .put('/characters/' + character.slug, { character: character })
            .toPromise()
            .then(() => character)
            .catch(this.handleError);
    }
    create(character): Promise<Character> {
        return this.apiService
            .post('/characters/', { character: character })
            .toPromise()
            .then(res => res.json().data as Character)
            .catch(this.handleError)
    }
    delete(slug) {
        return this.apiService.delete('/characters/' + slug)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}