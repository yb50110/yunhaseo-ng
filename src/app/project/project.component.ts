import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {trigger, style, transition, animate, state} from '@angular/animations';

// development projects
import {Pepoints} from './development/pepoints';
import {Safehr} from './development/safehr';
import {Krake} from './development/krake';
import {Toolgle} from './development/toolgle';
import {Ourfuturehealth} from './development/ourfuturehealth';
import {Beyondthegalaxy} from './development/beyondthegalaxy';
// import {Mdeb} from './development/mdeb';
// import {Techniekpact} from './development/techniekpact';
// import UMC
// this

// design projects
import {B507MarketingHandout} from './design/b507-marketing-handout';
import {Spjikergoed} from './design/spijkergoed';
import {Swan} from './design/swan';
import {Yunhaseo} from './design/yunhaseo';
import {Otp} from './design/otp';
// mnamp infographic
// noname clinic
// this

// illustration projects
import {Petiteaparis} from './illustration/petiteaparis';
import {Selfportraiterik} from './illustration/selfportrait-erik';
// lost-crayons

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
            case 'toolgle':
                this.projectData = Toolgle;
                break;
            case 'ourfuturehealth':
                this.projectData = Ourfuturehealth;
                break;
            case 'beyondthegalaxy':
                this.projectData = Beyondthegalaxy;
                break;
            // case 'mdeb':
            //     this.projectData = Mdeb;
            //     break;
            // case 'techniekpact':
            //     this.projectData = Techniekpact;
            //     break;

            // design projects
            case 'b507-marketing-handout':
                this.projectData = B507MarketingHandout;
                break;
            case 'spijkergoed':
                this.projectData = Spjikergoed;
                break;
            case 'swan':
                this.projectData = Swan;
                break;
            case 'yunhaseo':
                this.projectData = Yunhaseo;
                break;
            case 'otp':
                this.projectData = Otp;
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
