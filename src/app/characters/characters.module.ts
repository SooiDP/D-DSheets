import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharactersComponent } from './characters.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    CharactersComponent
  ]
})
export class CharactersModule {}
