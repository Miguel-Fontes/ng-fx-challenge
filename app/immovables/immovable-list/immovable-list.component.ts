import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ImmovableService } from './../shared/immovable.service'
import { Immovable } from './../shared/immovable.interface'

@Component({
    moduleId: module.id,
    selector: 'immovable-list',
    templateUrl: './immovable-list.component.html',
    styleUrls: ["./../../assets/styles.css"]
})

export class ImmovableListComponent implements OnInit {
    public immovables : Immovable[];
    private errorMessage : String;


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private immovableService: ImmovableService
    ) { }

    ngOnInit() {
        this.immovableService.list().subscribe (
            data => this.immovables = data,
            error => this.errorMessage = error
        );
     }
}