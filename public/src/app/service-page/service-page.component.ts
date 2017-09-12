import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { ServiceFormComponent } from '../service-form/service-form.component';


@Component({
	selector: 'app-service-page',
	templateUrl: './service-page.component.html',
	styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(ServiceFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			// console.log('The dialog was closed: ', result);
		});
	}

}
