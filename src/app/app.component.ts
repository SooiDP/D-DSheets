import { Component } from '@angular/core';

import { Character } from './character';

const CHARACTERS: Character[] = [
  {
    id: 0, race: 'Dragonborn', subRace: 'Blue',
    name: 'Rhogar', class: 'fighter', level: 3
  },
  {
    id: 11, race: 'Half-Orc', subRace: undefined,
    name: 'Nalt', class: 'paladin', level: 4
  },
  {
    id: 12, race: 'Half-Orc', subRace: undefined,
    name: 'Filipo', class: 'ranger', level: 3
  },
  {
    id: 13, race: 'elf', subRace: 'drow',
    name: 'Shadow', class: 'rogue', level: 4
  },
  {
    id: 14, race: 'Human', subRace: undefined,
    name: 'Jonjen', class: 'monk', level: 3
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'D&D Sheets';
  character: Character = {
    id: 1,
    race: 'Dragonborn',
    subRace: 'Blue',
    class: 'fighter',
    level: 1,
    name: 'Rhogar'
  };
  characters = CHARACTERS;
  selectedCharacter: Character;
  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
}

