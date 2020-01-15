import { Component } from '@angular/core';
import { NflCrimeService } from './services/nfl-crime.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'NFL Crime';
  show:boolean = false;
  viewKey:number = 0;
  crime:string = "";

  viewsList: any[] = [
    {
       key:"0",
       value:"Top Crimes"
    },
    {
       key:"1",
       value:"Top Players for Crime"
    },
    {
       key:"2",
       value:"Top Teams for Crime"
    }
 ]
  constructor(public nfl_crime: NflCrimeService, private router: Router){
  }

  ngOnInit(){
    let url = window.location.href;
    if(url.includes("topPlayers")){
      this.crime = url.split("topPlayers/")[1];
    }
    else if(url.includes("topTeams")){
      this.crime = url.split("topTeams/")[1];
    }
    else{

    }
  }

  dropdownChange(event){
    this.viewKey = event.target.value;
    if(this.viewKey == 1 || this.viewKey == 2){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }
  changeView(){
    if(this.viewKey == 0){
      this.router.navigate(['/crime'])
    }
    else if(this.viewKey == 1){
      console.log("players");
      this.router.navigate(['/crime/topPlayers/', this.crime])
    }
    else{
      this.router.navigate(['/crime/topTeams/', this.crime])
    }
  }
}
