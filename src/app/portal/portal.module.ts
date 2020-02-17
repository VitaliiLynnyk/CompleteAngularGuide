import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerModule } from '../containers/container.module';
import { PortalRoutingModule } from './portal-routing.module';

import { PortalComponent } from './portal.component';

@NgModule({
  imports: [
    CommonModule,
    ContainerModule,
    PortalRoutingModule
  ],
  exports: [ PortalComponent ],
  declarations: [ PortalComponent ]
})
export class PortalPageModule {}
