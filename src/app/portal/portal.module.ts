import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersModule } from '../containers/containers.module';
import { PortalComponent } from './portal.component';

@NgModule({
  imports: [
    CommonModule,
    ContainersModule
  ],
  exports: [PortalComponent],
  declarations: [PortalComponent]
})
export class PortalPageModule {}
