import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NflCrimeService {

constructor(private httpClient: HttpClient) { }

    
    getTopCrimes() {
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime`);
    }
    getTopPlayersForCrime(crime: string){
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime/topPlayers/${crime}`);

    }
    getTopTeamsForCrime(crime: string){
        return this.httpClient.get(`http://nflarrest.com/api/v1/crime/topTeams/${crime}`);
    }
}