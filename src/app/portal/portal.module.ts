import { NgModule } from '@angular/core';

import { ContainersModule } from '../containers/containers.module';

import { PortalComponent } from './portal.component';

@NgModule({
  imports: [ContainersModule],
  exports: [PortalComponent],
  declarations: [PortalComponent]
})
export class PortalPageModule {}
