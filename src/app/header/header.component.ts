import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar fixed-top navbar-expand-sm">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link"  href="#">
        <img src="https://app.jetmatt.com/jetmatt-logo-full-light.4dc2f3c9b3d4725561d1.svg" class="logo" />
        </a>
      </li>
    </ul>
  </div>
</nav>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
