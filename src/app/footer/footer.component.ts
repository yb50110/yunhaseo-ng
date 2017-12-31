import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer>
            <p>Copyright © 2017 of Yun Ha Seo</p>
        </footer>
    `,
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
