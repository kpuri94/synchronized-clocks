import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css']
})
export class AnalogClockComponent {
  digits: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  @Input() hourHand = 0;
  @Input() minuteHand = 0;
  @Input() secondHand = 0;
}
