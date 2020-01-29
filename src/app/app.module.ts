import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PortalPageModule } from './portal/portal.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PortalPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
