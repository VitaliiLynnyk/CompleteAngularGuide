import { Component } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.html',
  styleUrls: ['./portal.scss']
})
export class PortalComponent {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
