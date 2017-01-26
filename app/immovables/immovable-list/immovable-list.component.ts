import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Immovable } from './../shared/immovable.interface'

@Component({
    moduleId: module.id,
    selector: 'immovable-list',
    templateUrl: './immovable-list.component.html'
})

export class ImmovableListComponent implements OnInit {
    @Input() immovables : Immovable[];
    private errorMessage : String;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) { }

    ngOnInit() { }
}