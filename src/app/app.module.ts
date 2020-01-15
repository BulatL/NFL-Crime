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


@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent
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
