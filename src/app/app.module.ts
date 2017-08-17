import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersComponent } from './characters.component';
import { CharacterService } from './character.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
