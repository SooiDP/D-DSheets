import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthMenuComponent } from './auth-menu.component';
import { SharedModule } from '../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AuthMenuComponent
  ]
})
export class AuthMenuModule {}