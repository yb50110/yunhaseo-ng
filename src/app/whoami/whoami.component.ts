import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

@Component({
    selector: 'app-whoami',
    templateUrl: './whoami.component.html',
    styleUrls: ['./whoami.component.scss'],
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
            transition(':enter', [
                style({opacity: 0, transform: 'translateY(20%)'}),
                animate('0.3s ease-in-out', style({opacity: 1, transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
                style({opacity: 1, transform: 'translateY(0%)'}),
                animate('0.3s ease-out', style({opacity: 0, transform: 'translateY(20%)'}))
            ])
        ])
    ]
})
export class WhoamiComponent implements OnInit {

    showEmailOptions: boolean;
    copiedEmail: boolean;

    constructor() {
    }

    ngOnInit() {
        this.showEmailOptions = false;
        this.copiedEmail = false;
    }

    toggleEmailOptions() {
        this.showEmailOptions = this.showEmailOptions == true ? false : true;
        this.copiedEmail = false;
    }
}
