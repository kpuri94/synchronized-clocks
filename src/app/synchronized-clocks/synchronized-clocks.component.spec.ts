import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';

import { SynchronizedClocksComponent } from './synchronized-clocks.component';

describe('SynchronizedClocksComponent', () => {
  let fixture: ComponentFixture<SynchronizedClocksComponent>;
  let component: SynchronizedClocksComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SynchronizedClocksComponent, AnalogClockComponent, DigitalClockComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SynchronizedClocksComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create', () => {
    const instance = fixture.componentInstance;
    expect(instance).toBeTruthy();
  });

  it('should have app-analog-clock component rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("app-analog-clock")).not.toBeNull();
    expect(nativeElement.querySelector("app-analog-clock")).not.toBeUndefined();
  });

  it('should have app-digital-clock component rendered', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("app-digital-clock")).not.toBeNull();
    expect(nativeElement.querySelector("app-digital-clock")).not.toBeUndefined();
  });

  it('should render correct text for analog clock time modifier', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("#analogTimeInputText").textContent).toBe("Adjust Time On Analog Clock:");
  });

  it('should render correct text for digital clock time modifier', () => {
    const nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelector("#digitalTimeInputText").textContent).toBe("Adjust Time On Digital Clock:");
  });

  it('should call onSync method for analog onChange event', () => {
    spyOn(component, 'onSync');
    const element = fixture.nativeElement.querySelector("#analogTimeInput");
    const onChangeEvent = new Event("change", { bubbles: true, cancelable: false });
    element.dispatchEvent(onChangeEvent);
    expect(component.onSync).toHaveBeenCalled();
  });

  it('should call onSync method for digital onChange event', () => {
    spyOn(component, 'onSync');
    const element = fixture.nativeElement.querySelector("#digitalTimeInput");
    const onChangeEvent = new Event("change", { bubbles: true, cancelable: false });
    element.dispatchEvent(onChangeEvent);
    expect(component.onSync).toHaveBeenCalled();
  });

  it('should check if onSync performs all desired actions correctly', () => {
    const onSyncInput = { target: { value: '11:11:23' } } as any;
    component.onSync(onSyncInput);
    expect(component.startTime.toString()).toContain('11:11:23');
    expect(onSyncInput.target.value).toBe('');
  });

  it('should check if onSync should not perform all desired actions with incorrect arguments', () => {
    const onSyncInput = { target: { value: null } } as any;
    const onSyncFn = () => component.onSync(onSyncInput);
    expect(onSyncFn).toThrow();
  });

  it('should receive correct seconds value every millisecond', fakeAsync(() => {
    const initialDate = new Date();
    const initialSeconds = initialDate.getSeconds();
    component.secondHandPosition = initialSeconds * 6;
    tick(0);
    expect(component.secondHandPosition).toEqual(initialSeconds * 6);
    tick(2000);
    const elapsedDate = new Date();
    const elapsedSeconds = elapsedDate.getSeconds();
    component.secondHandPosition = elapsedSeconds * 6;
    expect(component.secondHandPosition).toEqual((initialSeconds + 2) * 6);
    component.counter.unsubscribe();
  }));
});
