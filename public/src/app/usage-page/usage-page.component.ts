import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';

import { UsageFormComponent } from '../usage-form/usage-form.component';

@Component({
	selector: 'app-usage-page',
	templateUrl: './usage-page.component.html',
	styleUrls: ['./usage-page.component.css']
})
export class UsagePageComponent implements OnInit {

	constructor(public dialog: MdDialog) { }

	ngOnInit() {
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(UsageFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			// console.log('The dialog was closed: ', result);
		});
	}

}
