import { Component } from '@angular/core';

export class Character {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <h2>{{character}} character sheet</h2>
  `,
  //styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'D&D Sheets';
  character: Character = {
    id: 1,
    name: 'Rhogar'
  };
}