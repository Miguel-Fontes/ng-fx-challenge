import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ImmovableListComponent } from './immovables/immovable-list/immovable-list.component';

@Component({
    moduleId: module.id,
    selector: 'immovables',
    templateUrl: './immovables.component.html',
    styleUrls: ["./../assets/styles.css"]
})

export class ImmovablesComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }
}