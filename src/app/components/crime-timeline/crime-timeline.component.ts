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
    this.crime = crime;
    this.nfl_crime.getCrimeTimeline(this.crime).subscribe( res => 
      { 
        let years = res.map( res => res.Year)
        let months = res.map( res => res.Month)
        let arrest_counts = res.map( res => res.arrest_count)

        let crime_timelines_dates = []
        for (let i = 0; i < years.length; i++) {
          let date = new Date(years[i], months[i]);
          crime_timelines_dates.push(date.toLocaleDateString('srb', { year: 'numeric', month: 'short'}));
          
        }

        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: crime_timelines_dates,
            datasets: [
              {
                label: "arrest count",
                data: arrest_counts,
                borderColor: '#3cba9f',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display: true
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
      });
  }
}