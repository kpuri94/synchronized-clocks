import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SynchronizedClocksComponent } from './synchronized-clocks/synchronized-clocks.component';
import { AnalogClockComponent } from './synchronized-clocks/analog-clock/analog-clock.component';
import { DigitalClockComponent } from './synchronized-clocks/digital-clock/digital-clock.component';
import { GlobalErrorHandler } from './error-handler';

@NgModule({
  declarations: [
    AppComponent,
    SynchronizedClocksComponent,
    AnalogClockComponent,
    DigitalClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
