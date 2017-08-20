import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CharacterService, Character } from '../shared';
import { AppComponent } from '../app.component';

@Component({
  selector: 'my-characters',
  providers: [],
  templateUrl: './characters.component.html'
})

export class CharactersComponent {
  characters: Character[];
  selectedCharacter: Character;

  constructor(private characterService: CharacterService, private router: Router) { }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }

  getCharacters(): void {
    this.characterService.getCharacters().then(characters => this.characters = characters);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCharacter.slug]);
  }

  add(): void {
    this.router.navigate(['/character/new']);
  }

  delete(character: Character): void {
    this.characterService
      .delete(character.slug)
      .then(() => {
        this.characters = this.characters.filter(c => c!== character);
        if (this.selectedCharacter === character) { this.selectedCharacter = null; }
      });
  }
}

