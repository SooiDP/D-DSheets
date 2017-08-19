import { Component } from '@angular/core';

import { CharacterService, Character } from '../shared';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
    characters: Character[] = [];

    constructor(private characterService: CharacterService) { }

    ngOnInit(): void {
        this.characterService.getCharacters().then(characters => this.characters = characters.slice(0,3));
    }
 }