import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ShoppingListService } from './services/shopping-list.service';

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
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule {}
