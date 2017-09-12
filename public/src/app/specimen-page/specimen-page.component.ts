import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { SpecimenFormComponent } from '../specimen-form/specimen-form.component';

@Component({
	selector: 'app-specimen-page',
	templateUrl: './specimen-page.component.html',
	styleUrls: ['./specimen-page.component.css']
})
export class SpecimenPageComponent implements OnInit {

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(SpecimenFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			// console.log('The dialog was closed: ', result);
		});
	}

}
