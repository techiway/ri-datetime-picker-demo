import { ChangeDetectionStrategy, Component } from '@angular/core';

const ONE_DAY = 24 * 60 * 60 * 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  
  public min: Date = new Date(Date.now() - 30 * ONE_DAY);
  public max: Date = new Date();
  protected selectedDates: [Date, Date] = [
    new Date(Date.now() - ONE_DAY),
    new Date(Date.now() + ONE_DAY)
  ];

  protected currentValue: Date = new Date(this.selectedDates[0]);

  protected endValue: Date = new Date(this.selectedDates[1]);

  public myFilter = (date: Date): boolean =>  { 
    const day:number = date.getDay();
    return day !== 0 && day !== 6;
  }

  protected selectedTrigger(date: Date): void {
    console.log(date);
  }

}
 