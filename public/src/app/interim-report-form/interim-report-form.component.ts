import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-interim-report-form',
	templateUrl: './interim-report-form.component.html',
	styleUrls: ['./interim-report-form.component.css']
})
export class InterimReportFormComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<InterimReportFormComponent>) { }

	ngOnInit() {
	}

}
