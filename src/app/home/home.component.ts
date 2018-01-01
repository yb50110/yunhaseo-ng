import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
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
        ]),

        trigger('fadeAnimation', [
            // transition(':enter', [
            //     style({opacity: 0, transform: 'translateY(-10%)'}),
            //     animate('0.3s ease-in-out', style({opacity: 1, transform: 'translateY(0%)'}))
            // ]),
            // transition(':leave', [
            //     style({opacity: 1, transform: 'translateY(0%)'}),
            //     animate('0.3s ease-out', style({opacity: 0, transform: 'translateY(-10%)'}))
            // ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    show_development: boolean;
    show_design: boolean;
    show_illustration: boolean;

    constructor() {
    }

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
