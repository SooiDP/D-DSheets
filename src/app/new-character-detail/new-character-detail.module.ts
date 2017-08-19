import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NewCharacterDetailComponent } from './new-character-detail.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NewCharacterDetailComponent
  ]
})
export class NewCharacterDetailComponentModule {}
