import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailsComponent } from './pages/character-details/character-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { StarshipDetailsComponent } from './pages/starship-details/starship-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'character/:id',
    component: CharacterDetailsComponent
  },
  {
    path: 'starship/:id',
    component: StarshipDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
