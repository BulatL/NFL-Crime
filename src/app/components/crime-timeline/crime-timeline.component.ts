import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { NflCrimeService } from '../../services/nfl-crime.service';
import { ActivatedRoute } from '@angular/router';
import { CrimeTimeline } from '../../models/crime-timeline';

@Component({
  selector: 'app-crime-timeline',
  templateUrl: './crime-timeline.component.html',
  styleUrls: ['./crime-timeline.component.css']
})
export class CrimeTimelineComponent implements OnInit {
  chart = [];
  crime_timeline: CrimeTimeline[] = [];
  crime:string = "";

  constructor(private nfl_crime: NflCrimeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {this.loadData(routeParams.crime)})
  }

  loadData(crime){
    this.nfl_crime.getCrimeTimeline(crime).subscribe( res => {this.crime_timeline = res, console.log(this.crime_timeline)})
    let months = this.crime_timeline.map( res=> res.Month);
    let years = this.crime_timeline.map( res=> res.Year);
    let arrest_counts = this.crime_timeline.map( res=> res.arrest_count);
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: "year",
        datasets: [
          { 
            data: months,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: years,
            borderColor: "#ffcc00",
            fill: false
          },
          { 
            data: arrest_counts,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });
  }

}
