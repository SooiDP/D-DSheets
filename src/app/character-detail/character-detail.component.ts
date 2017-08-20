import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService, Character } from '../shared';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html'
})

export class CharacterDetailComponent /*implements OnInit*/ {
    character: Character;

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.url.subscribe(data => {
            var slug = data[data.length - 1].path;
            this.route.paramMap
                .switchMap((params: ParamMap) => this.characterService.getCharacter(slug))
                .subscribe(character => this.character = character);
        });
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.characterService.update(this.character)
            .then(() => this.goBack());
    }
}