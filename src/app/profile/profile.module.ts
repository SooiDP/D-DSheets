import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule {}
