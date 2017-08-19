import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharacterDetailComponent } from './character-detail.component';
import { AuthGuard, SharedModule } from '../shared';

const characterDetailRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'settings',
    component: CharacterDetailComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    SharedModule,
    characterDetailRouting
  ],
  declarations: [
    CharacterDetailComponent
  ]
})
export class CharacterDetailModule {}
