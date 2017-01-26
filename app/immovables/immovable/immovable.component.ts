import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'immovable',
    templateUrl: './immovable.component.html'
})

export class ImmovableComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() { }
}