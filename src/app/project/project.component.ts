import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, style, transition, animate, state} from '@angular/animations';

// development projects
import {Pepoints} from './development/pepoints';
import {Safehr} from './development/safehr';
import {Krake} from './development/krake';

// design projects
import {Spjikergoed} from './design/spijkergoed';
import {Swan} from './design/swan';
import {Yunhaseo} from './design/yunhaseo';

// illustration projects
import {Petiteaparis} from './illustration/petiteaparis';
import {Selfportraiterik} from './illustration/selfportrait-erik';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    animations: [
        trigger('routerTransition', [
            transition(':enter', [  // before 2.1: transition('void => *', [
                style({transform: 'scale(0.9)', opacity: 0}),
                animate('0.6s ease-in-out', style({transform: 'scale(1)', opacity: 1}))
            ]),
            transition(':leave', [  // before 2.1: transition('* => void', [
                style({transform: 'scale(1)', opacity: 1}),
                animate('0.6s ease-in-out', style({transform: 'scale(0.9)', opacity: 0}))
            ])
        ])
    ]
})

export class ProjectComponent implements OnInit {

    projectName: string;
    projectData;

    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(res => {
            this.projectName = res.name;
        });

        switch (this.projectName) {
            // development projects
            case 'pepoints':
                this.projectData = Pepoints;
                break;
            case 'safehr':
                this.projectData = Safehr;
                break;
            case 'krake':
                this.projectData = Krake;
                break;

            // design projects
            case 'spijkergoed':
                this.projectData = Spjikergoed;
                break;
            case 'swan':
                this.projectData = Swan;
                break;
            case 'yunhaseo':
                this.projectData = Yunhaseo;
                break;

            // illustration projects
            case 'petiteaparis':
                this.projectData = Petiteaparis;
                break;
            case 'selfportrait-erik':
                this.projectData = Selfportraiterik;
                break;
        }
    }

    ngOnInit() {
    }

}
