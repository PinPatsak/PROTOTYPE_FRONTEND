import { Component, OnInit } from '@angular/core';
import { CloudOptions, CloudData } from 'angular-tag-cloud-module';
import { randomData } from './helpers';

@Component({
    selector: 'app-word-cloud',
    templateUrl: './word-cloud.component.html',
    styleUrls: ['./word-cloud.component.scss']
})
export class WordCloudComponent implements OnInit {

    constructor() { }

    options: CloudOptions = {
        width: 0.8,
        height: 400,
        overflow: false,
        zoomOnHover: {
            scale: 1.2,
            transitionTime: 0.3,
            delay: .3
        },
        realignOnResize: false
    };

    data: CloudData[] = randomData(50);

    ngOnInit(): void {
    }
}
