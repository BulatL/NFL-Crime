export class TopTeams {
    Team: string;
    Team_name: string;
    Team_city: string;
    arrest_count: number;

    constructor(Team, Team_name, Team_city, arrest_count){
        this.Team = Team;
        this.Team_name = Team_name;
        this.Team_city = Team_city;
        this.arrest_count = arrest_count;
    }
}