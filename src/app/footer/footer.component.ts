import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer>
            <p class="footer-links"><a href="https://github.com/yb50110" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/yunha-seo/" target="_blank">LinkedIn</a></p>
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
