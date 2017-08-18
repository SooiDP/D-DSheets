import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterDetailComponent } from './character-detail.component';
import { CharactersComponent } from './characters.component';
import { CharacterService } from './character.service';
import { DashboardComponent } from './dashboard.component';
import { NewCharacterDetailComponent } from './new-character-detail.component';
import { CharacterSearchComponent } from './character-search.component';

import { AppRoutingModule } from './app-routing.module';

//IN-MEMORY WEB API REMOVE
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent,
    CharacterDetailComponent,
    CharactersComponent,
    DashboardComponent,
    NewCharacterDetailComponent,
    CharacterSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
