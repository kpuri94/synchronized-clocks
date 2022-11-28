import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalogClockComponent } from './analog-clock.component';

describe('AnalogClockComponent', () => {
  let component: AnalogClockComponent;
  let fixture: ComponentFixture<AnalogClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalogClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AnalogClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have hour hand rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector(".hour-hand")).not.toBeNull();
    expect(nativeElement.querySelector(".hour-hand")).not.toBeUndefined();
  });

  it('should have minute hand rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector(".minute-hand")).not.toBeNull();
    expect(nativeElement.querySelector(".minute-hand")).not.toBeUndefined();
  });

  it('should have second hand rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector(".second-hand")).not.toBeNull();
    expect(nativeElement.querySelector(".second-hand")).not.toBeUndefined();
  });
});
