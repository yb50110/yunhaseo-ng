import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pepoints } from './development/pepoints';
import { Safehr } from './development/safehr';

import { Spjikergoed } from './design/spijkergoed';
import { Swan } from './design/swan';

import { Petiteaparis } from './illustration/petiteaparis';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  projectName: string;
  projectData;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(res => {
      this.projectName = res.name;
    });

    switch (this.projectName) {
      case 'pepoints':
        this.projectData = Pepoints;
        break;
      case 'safehr':
        this.projectData = Safehr;
        break;

      case 'spijkergoed':
        this.projectData = Spjikergoed;
        break;
      case 'swan':
        this.projectData = Swan;
        break;

      case 'petiteaparis':
        this.projectData = Petiteaparis;
        break;
    }
  }

  ngOnInit() {
  }

}
