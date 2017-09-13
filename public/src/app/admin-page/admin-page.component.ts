import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';


import { ServiceFormComponent } from '../service-form/service-form.component';
import { SpecimenFormComponent } from '../specimen-form/specimen-form.component';
import { UsageFormComponent } from '../usage-form/usage-form.component';

@Component({
	selector: 'app-admin-page',
	templateUrl: './admin-page.component.html',
	styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	openServiceDialog(): void {
		let dialogRef = this.dialog.open(ServiceFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed: ', result);
		});
	}

	openSpecimenDialog(): void {
		let dialogRef = this.dialog.open(SpecimenFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed: ', result);
		});
	}

	openUsageDialog(): void {
		let dialogRef = this.dialog.open(UsageFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed: ', result);
		});
	}

}
