import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pepoints } from './pepoints';
import { Safehr } from './safehr';

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
    }
  }

  ngOnInit() {
  }

}
