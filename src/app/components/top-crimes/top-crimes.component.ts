import { Component, OnInit, Input } from '@angular/core';
import { NflCrimeService } from '../../services/nfl-crime.service';
import { TopCrime } from '../../models/top-crime';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
  top_crimes: TopCrime[] = [];
  @Input() showView:boolean = true;

  constructor(private nfl_crime: NflCrimeService) { }

  ngOnInit() {
    console.log("crimes");
    this.nfl_crime.getTopCrimes().subscribe( res => {this.top_crimes = res})
  }

}
