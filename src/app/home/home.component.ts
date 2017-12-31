import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show_development: boolean;
  show_design: boolean;
  show_illustration: boolean;

  constructor() { }

  ngOnInit() {
    this.show_development = false;
    this.show_design = false;
    this.show_illustration = false;
  }

  toggleShow(type) {
    switch (type) {
        // ternary: if _____ is false, set to true. if true, set to false
        // also set other groups to false so that they are not being shown
      case 'development':
        this.show_design = false;
        this.show_illustration = false;
        this.show_development = this.show_development === false ? true : false;
        break;
      case 'design':
        this.show_development = false;
        this.show_illustration = false;
        this.show_design = this.show_design === false ? true : false;
        break;
      case 'illustration':
        this.show_development = false;
        this.show_design = false;
        this.show_illustration = this.show_illustration === false ? true : false;
        break;
    }
  }
}
