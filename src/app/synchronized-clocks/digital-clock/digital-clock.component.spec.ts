import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DigitalClockComponent } from './digital-clock.component';

describe('DigitalClockComponent', () => {
  let component: DigitalClockComponent;
  let fixture: ComponentFixture<DigitalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DigitalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hour, minute and second on digital clock', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector(".hour")).not.toBeNull();
    expect(nativeElement.querySelector(".minute")).not.toBeNull();
    expect(nativeElement.querySelector(".second")).not.toBeNull();

    expect(nativeElement.querySelector(".hour")).not.toBeUndefined();
    expect(nativeElement.querySelector(".minute")).not.toBeUndefined();
    expect(nativeElement.querySelector(".second")).not.toBeUndefined();
  });
});
