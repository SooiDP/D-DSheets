import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Character } from './character';
import { CharacterService } from './character.service';
import { AppComponent } from './app.component';

@Component({
  selector: 'my-characters',
  providers: [],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
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
    this.router.navigate(['/detail', this.selectedCharacter.id]);
  }
}

