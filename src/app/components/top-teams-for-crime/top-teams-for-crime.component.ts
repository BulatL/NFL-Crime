import { Component, OnInit } from '@angular/core';
import { TopTeams } from '../../models/top-teams';
import { NflCrimeService } from '../../services/nfl-crime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.css']
})
export class TopTeamsForCrimeComponent implements OnInit {
  top_teams: TopTeams[] = [];
  filterTerm:string = "";
  crime= "";

  constructor(private nfl_crime: NflCrimeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {this.loadData(routeParams.crime)})
  }

  loadData(crime){
    this.crime = crime;
    this.nfl_crime.getTopTeamsForCrime(crime).subscribe( res => {this.top_teams = res})
  }
}