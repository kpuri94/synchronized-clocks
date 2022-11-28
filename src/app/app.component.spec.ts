import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AnalogClockComponent } from './synchronized-clocks/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './synchronized-clocks/digital-clock/digital-clock.component';
import { SynchronizedClocksComponent } from './synchronized-clocks/synchronized-clocks.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SynchronizedClocksComponent,
        AnalogClockComponent,
        DigitalClockComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have app-synchronized-clocks root component rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("app-synchronized-clocks")).not.toBeNull();
    expect(nativeElement.querySelector("app-synchronized-clocks")).not.toBeUndefined();
  });
});
