import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
  <!-- header -->
  <app-header></app-header>
  <!-- routes -->

  <router-outlet></router-outlet>

  <app-footer>
  </app-footer>

  <!-- footer -->
  `,
  styles: []
})
export class AppComponent {
}
