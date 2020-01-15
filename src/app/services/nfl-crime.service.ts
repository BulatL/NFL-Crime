import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class NflCrimeService {

constructor(private httpClient: HttpClient) { }


    getTopCrimes() {
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime`) as Observable<any>;
    }
    getTopPlayersForCrime(crime: string){
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime/topPlayers/${crime}`) as Observable<any>;

    }
    getTopTeamsForCrime(crime: string){
        console.log(crime);
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime/topTeams/${crime}`) as Observable<any>;
    }
}