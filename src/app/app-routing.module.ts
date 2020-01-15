import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopCrimesComponent } from './components/top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './components/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './components/top-teams-for-crime/top-teams-for-crime.component';

const routes: Routes = [
  { path: 'crime/topTeams/:crime', component: TopTeamsForCrimeComponent },
  { path: 'crime/topPlayers/:crime', component: TopPlayersForCrimeComponent },
  { path: 'crime', component: TopCrimesComponent },
  { path: '**', component: TopCrimesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
