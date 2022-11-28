import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent {
  @Input() hour = '';
  @Input() minute = '';
  @Input() second = '';
}
