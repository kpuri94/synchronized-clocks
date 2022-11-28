import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-synchronized-clocks',
  templateUrl: './synchronized-clocks.component.html',
  styleUrls: ['./synchronized-clocks.component.css']
})
export class SynchronizedClocksComponent implements OnInit, OnDestroy {
  hourHandPosition = 0;
  minuteHandPosition = 0;
  secondHandPosition = 0;
  timeValues = {
    hour: '',
    minute: '',
    second: '',
  };

  counter!: Subscription;
  initialTime = new Date();
  startTime!: Date;

  ngOnInit(): void {
    this.startTime = this.initialTime;
    this.startClock();
  }

  startClock() {
    this.counter = timer(0, 1000).subscribe(() => {
      this.startTime.setSeconds(this.startTime.getSeconds() + 1);
      const seconds = this.startTime.getSeconds();
      const minute = this.startTime.getMinutes();
      const hour = this.startTime.getHours();

      this.timeValues.hour = this.displayDoubleDigit(hour);
      this.timeValues.minute = this.displayDoubleDigit(minute);
      this.timeValues.second = this.displayDoubleDigit(seconds);

      this.secondHandPosition = seconds * 6;
      this.minuteHandPosition = minute * 6;
      this.hourHandPosition = (hour > 11 ? hour - 12 : hour) * 30 + Math.floor(minute / 12) * 6;
    });
  }

  onSync(event: Event) {
    if (event?.target) {
      const timeValue = new Date();
      const target = event.target as HTMLInputElement;
      const [hours, minutes, seconds] = target.value.split(':');
      timeValue.setHours(+hours);
      timeValue.setMinutes(+minutes);
      timeValue.setSeconds(+seconds);
      this.startTime = timeValue;
      target.value = '';
    }
  }

  displayDoubleDigit(value: number): string {
    return ('00' + value).slice(-2);
  }

  ngOnDestroy() {
    this.counter.unsubscribe();
  }
}
