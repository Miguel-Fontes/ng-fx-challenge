import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ImmovableListComponent } from './immovable-list/immovable-list.component';

import { ImmovableService } from './shared/immovable.service'
import { Place, Image, Immovable } from './shared/immovable.interface'

@Component({
    moduleId: module.id,
    selector: 'immovables',
    templateUrl: './immovables.component.html',
    styleUrls: ["./../assets/styles.css"]
})

export class ImmovablesComponent implements OnInit {
    public immovables : Immovable[];
    private errorMessage : String;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private immovableService: ImmovableService
    ) { }

    ngOnInit() {
        this.allImmovables();
    }

    onAdd() {
        console.log("adding!")
        return this.addImmovable(this.immovables[0])
    }

    allImmovables() {
        this.immovableService.list().subscribe (
            data => this.immovables = data,
            error => this.errorMessage = error
        );
    }

    addImmovable(immovable : Immovable) {
        this.immovableService.add(immovable).subscribe (
            data => this.immovables.push(data),
            error => this.errorMessage = error
        )
    }
}