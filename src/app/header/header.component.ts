import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
      <header>
          <a routerLink="home">
            <img class="logo" src="../../assets/img/yunha-logo.svg" alt="Yunha's logo">
          </a>
      </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
