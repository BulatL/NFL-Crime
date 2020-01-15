import { Pipe, PipeTransform } from '@angular/core';
import { TopPlayers } from '../../models/top-players';

@Pipe({
  name: 'playersFilter'
})
export class PlayersFilterPipe implements PipeTransform {

  transform(top_players: TopPlayers[], filter_term: string): TopPlayers[] {
    if(!top_players || !filter_term){
      return top_players;
    }

    return top_players.filter(top_player => 
      top_player.Name.toLowerCase().indexOf(filter_term.toLowerCase()) != -1);
  }
}
