import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss'],
  animations: [
    trigger('routerTransition', [
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({opacity: 0}),
        animate('0.6s ease-in-out', style({ opacity: 1}))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({opacity: 1}),
        animate('0.6s ease-in-out', style({opacity: 0}))
      ])
    ])
  ]
})
export class DeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
