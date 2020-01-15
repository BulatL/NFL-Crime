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

  
  constructor(public nfl_crime: NflCrimeService, private router: Router){
  }

  ngOnInit(){
    
  }

  dropdownChange(event){
    this.viewKey = event.target.value;
    if(this.viewKey == 1 || this.viewKey == 2 || this.viewKey == 3){
      this.show = true;
    }
    else{
      this.show = false;
    }
  }
  changeView(){
    if(this.viewKey == 0){
      this.router.navigate(['/crime']);
    }
    else if(this.viewKey == 1){
      this.router.navigate(['/crime/topPlayers/', this.crime]);
    }
    else if(this.viewKey == 2){
      this.router.navigate(['/crime/topTeams/', this.crime]);
    }
    else{
      this.router.navigate(['/crime/timeline/', this.crime]);
    }
  }
}
