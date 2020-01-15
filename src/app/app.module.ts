import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopCrimesComponent } from './components/top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './components/top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './components/top-teams-for-crime/top-teams-for-crime.component';
import { AppRoutingModule } from './app-routing.module';
import { NflCrimeService } from './services/nfl-crime.service';
import { CrimeFilterPipe } from './components/top-crimes/crime-filter.pipe';
import { PlayersFilterPipe } from './components/top-players-for-crime/players-filter.pipe';
import { TeamsFilterPipe } from './components/top-teams-for-crime/teams-filter.pipe';
import { CrimeTimelineComponent } from './components/crime-timeline/crime-timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    CrimeFilterPipe,
    PlayersFilterPipe,
    TeamsFilterPipe,
    CrimeTimelineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NflCrimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
