export class CrimeTimeline {
    Month: number;
    Year: number;
    arrest_count: number;

    constructor(Month, Year, arrest_count){
        this.Month = Month;
        this.Year = Year;
        this.arrest_count = arrest_count;
    }
}