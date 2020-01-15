import { Component, OnInit } from '@angular/core';
import { TopPlayers } from '../../models/top-players';
import { NflCrimeService } from '../../services/nfl-crime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.css']
})
export class TopPlayersForCrimeComponent implements OnInit {
  top_players: TopPlayers[] = [];
  filterTerm:string = "";
  crime = "";

  constructor(private nfl_crime: NflCrimeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {this.loadData(routeParams.crime)})
  }

  loadData(crime){
    this.nfl_crime.getTopPlayersForCrime(crime).subscribe( res => {this.top_players = res})
  }
}
