import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AuthMenuModule } from './auth-menu/auth-menu.module'
import { CharacterDetailModule } from './character-detail/character-detail.module';
import { CharactersModule } from './characters/characters.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { NewCharacterDetailComponentModule } from './new-character-detail/new-character-detail.module';
import {
  CharacterService,
  SharedModule,
  AuthGuard,
  ApiService,
  JwtService,
  UserService
} from './shared';

import { AppRoutingModule } from './app-routing.module';

//IN-MEMORY WEB API REMOVE
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    SharedModule,
    AuthMenuModule,
    AuthModule,
    CharacterDetailModule,
    CharactersModule,
    DashboardModule,
    NewCharacterDetailComponentModule,
    HomeModule
    // InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    CharacterService,
    AuthGuard,
    ApiService,
    JwtService,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
