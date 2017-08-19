import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { NewCharacterDetailComponent } from './new-character-detail/new-character-detail.component';
import { AuthComponent } from './auth/auth.component';
import { NoAuthGuard } from './auth/no-auth-guard.service';
import { AuthMenuComponent } from './auth-menu/auth-menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'characters',
        component: CharactersComponent
    },
    {
        path: 'detail/:id',
        component: CharacterDetailComponent
    },
    {
        path: 'character/new',
        component: NewCharacterDetailComponent
    },
    {
        path: 'auth',
        component: AuthMenuComponent
    },
    {
        path: 'auth/login',
        component: AuthComponent
    },
    {
        path: 'auth/register',
        component: AuthComponent
    },
    {
        path: '**',
        redirectTo: '/auth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }