import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Character } from './character';
import { CharacterService } from './character.service';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'new-character-detail',
    templateUrl: './new-character-detail.component.html',
    styleUrls: ['./character-detail.component.css']
})

export class NewCharacterDetailComponent {
    character: Character;

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    goBack(): void {
        this.location.back();
    }

    save(race: string, subRace: string, charClass: string, name: string, level: number): void {
        this.characterService.create(race, subRace, charClass, name, level)
            .then(() => this.goBack());
    }
}