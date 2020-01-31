import { NgModule } from '@angular/core';

import { ContainersModule } from '../containers/containers.module';

import { PortalComponent } from './portal.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    ContainersModule,
    CommonModule
  ],
  exports: [PortalComponent],
  declarations: [PortalComponent]
})
export class PortalPageModule {}
