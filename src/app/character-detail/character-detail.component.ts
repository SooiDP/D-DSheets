import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService, Character } from '../shared';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'character-detail',
    templateUrl: './character-detail.component.html',
    styleUrls:['./character-detail.component.css']
})

export class CharacterDetailComponent implements OnInit {
    character: Character;

    constructor( 
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.characterService.getCharacter(+params.get('id')))
            .subscribe(character => this.character = character);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.characterService.update(this.character)
            .then(() => this.goBack());
    }
}