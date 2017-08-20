import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService, Character } from '../shared';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'new-character-detail',
    templateUrl: './new-character-detail.component.html'
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

    save(character): void {
        this.characterService.create(this.character)
            .then(() => this.goBack());
    }
}