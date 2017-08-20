import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { Character, CharacterService } from '../shared';
import { Location } from '@angular/common';

@Component({
    selector: 'new-character-page',
    templateUrl: './new-character-detail.component.html'
})
export class NewCharacterDetailComponent {
    newCharacterForm: FormGroup;
    errors: Object = {};
    isSubmitting = false;
    character: Character = new Character();

    constructor(
        private router: Router,
        private characterService: CharacterService,
        private fb: FormBuilder,
        private location: Location
    ) {
        // create form group using the form builder
        this.newCharacterForm = this.fb.group({
            race: '',
            subRace: '',
            class: '',
            name: '',
            level: ''
        });
    }

    submitForm() {
        this.isSubmitting = true;

        this.characterService.create(this.character)
            .then(() => this.goBack());
    }
    goBack(): void {
        this.location.back();
    }
}