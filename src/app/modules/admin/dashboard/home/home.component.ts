import { Component, OnInit } from '@angular/core';

interface Place {
    imgSrc: string;
    name: string;
    description: string;
    charge: string;
    location: string;
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    places: Array<Place> = [];
    constructor() { }
    ngOnInit() {
        this.places = [
            {
                imgSrc: 'assets/images/card-1.jpg',
                name: 'Temp Data',
                description: `Aliquam aliquam et, fusce sit, odio nisl at sed laoreet mi explicabo, proin vulputate rutrum,
                 elementum wisi scelerisque sit elit amet pede. Aenean erat cras. Potenti sed, turpis et proin vel lectus tellus
                 elit. Magna maecenas elit maecenas ut, placerat sed, integer libero etiam integer blandit mauris, mollitia elit
                  donec potenti, sit ante. Aliquam lectus pellentesque nulla mauris eget ipsum, vitae pellentesque feugiat
                  cursus porta, donec turpis ipsum commodo magna lobortis molestie, volutpat hac porttitor dis neque quibusdam
                   id, a quam sociosqu quis ut neque ut. Hendrerit dolor, et egestas tortor, morbi integer consectetuer, metus
                   sit blandit, at fusce fringilla. Aenean ipsum rhoncus, amet amet, enim tellus a, donec mi mollis, viverra
                    leo cursus tellus egestas. Lacus sit tristique tellus, elit fusce suspendisse vehicula laoreet, nec donec
                     id massa, justo ipsum id.`,
                charge: '',
                location: 'Bangkok, Thailand'
            },
            {
                imgSrc: 'assets/images/card-1.jpg',
                name: 'Temp Data',
                description: `Aliquam aliquam et, fusce sit, odio nisl at sed laoreet mi explicabo, proin vulputate rutrum,
                 elementum wisi scelerisque sit elit amet pede. Aenean erat cras. Potenti sed, turpis et proin vel lectus tellus
                 elit. Magna maecenas elit maecenas ut, placerat sed, integer libero etiam integer blandit mauris, mollitia elit
                  donec potenti, sit ante. Aliquam lectus pellentesque nulla mauris eget ipsum, vitae pellentesque feugiat
                  cursus porta, donec turpis ipsum commodo magna lobortis molestie, volutpat hac porttitor dis neque quibusdam
                   id, a quam sociosqu quis ut neque ut. Hendrerit dolor, et egestas tortor, morbi integer consectetuer, metus
                   sit blandit, at fusce fringilla. Aenean ipsum rhoncus, amet amet, enim tellus a, donec mi mollis, viverra
                    leo cursus tellus egestas. Lacus sit tristique tellus, elit fusce suspendisse vehicula laoreet, nec donec
                     id massa, justo ipsum id.`,
                charge: '',
                location: 'Bangkok, Thailand'
            },
            {
                imgSrc: 'assets/images/card-1.jpg',
                name: 'Temp Data',
                description: `Aliquam aliquam et, fusce sit, odio nisl at sed laoreet mi explicabo, proin vulputate rutrum,
                 elementum wisi scelerisque sit elit amet pede. Aenean erat cras. Potenti sed, turpis et proin vel lectus tellus
                 elit. Magna maecenas elit maecenas ut, placerat sed, integer libero etiam integer blandit mauris, mollitia elit
                  donec potenti, sit ante. Aliquam lectus pellentesque nulla mauris eget ipsum, vitae pellentesque feugiat
                  cursus porta, donec turpis ipsum commodo magna lobortis molestie, volutpat hac porttitor dis neque quibusdam
                   id, a quam sociosqu quis ut neque ut. Hendrerit dolor, et egestas tortor, morbi integer consectetuer, metus
                   sit blandit, at fusce fringilla. Aenean ipsum rhoncus, amet amet, enim tellus a, donec mi mollis, viverra
                    leo cursus tellus egestas. Lacus sit tristique tellus, elit fusce suspendisse vehicula laoreet, nec donec
                     id massa, justo ipsum id.`,
                charge: '',
                location: 'Bangkok, Thailand'
            }
        ];
    }
}
