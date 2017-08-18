import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CharactersComponent } from './characters.component';
import { CharacterDetailComponent } from './character-detail.component';
import { NewCharacterDetailComponent } from './new-character-detail.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}