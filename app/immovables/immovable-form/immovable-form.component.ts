import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'immovable-form',
    templateUrl: 'immovable-form.component.html'
})
export class ImmovableFormComponent implements OnInit {
    submitted = false;

    constructor() { }

    ngOnInit() { }

    onSubmit() { this.submitted = true; }
}