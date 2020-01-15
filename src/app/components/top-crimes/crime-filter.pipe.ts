import { Pipe, PipeTransform } from '@angular/core';
import { TopCrime } from '../../models/top-crime';

@Pipe({
  name: 'crimeFilter'
})
export class CrimeFilterPipe implements PipeTransform {

  transform(top_crimes: TopCrime[], filter_term: string): TopCrime[] {
    if(!top_crimes || !filter_term){
      return top_crimes;
    }

    return top_crimes.filter(top_crime => 
      top_crime.Category.toLowerCase().indexOf(filter_term.toLowerCase()) != -1);
  }

}
