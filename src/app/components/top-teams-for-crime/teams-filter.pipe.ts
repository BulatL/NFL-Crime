import { Pipe, PipeTransform } from '@angular/core';
import { TopTeams } from '../../models/top-teams';

@Pipe({
  name: 'teamsFilter'
})
export class TeamsFilterPipe implements PipeTransform {

  transform(top_teams: TopTeams[], filter_term: string): TopTeams[] {
    if(!top_teams || !filter_term){
      return top_teams;
    }

    return top_teams.filter(top_team => 
      (top_team.Team.toLowerCase().indexOf(filter_term.toLowerCase()) != -1) ||
      (top_team.Team_name.toLowerCase().indexOf(filter_term.toLowerCase()) != -1));
  }
}
