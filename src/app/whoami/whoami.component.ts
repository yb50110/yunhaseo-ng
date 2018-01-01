import {Component, OnInit} from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations';

@Component({
    selector: 'app-whoami',
    templateUrl: './whoami.component.html',
    styleUrls: ['./whoami.component.scss'],
    animations: [
        trigger('routerTransition', [
            // state('void', style({position: 'fixed', width: '100%'})),
            // state('*', style({position: 'fixed', width: '100%'})),
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
export class WhoamiComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
