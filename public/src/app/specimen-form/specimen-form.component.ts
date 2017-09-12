import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-specimen-form',
	templateUrl: './specimen-form.component.html',
	styleUrls: ['./specimen-form.component.css']
})
export class SpecimenFormComponent implements OnInit {

	constructor(public dialogRef: MdDialogRef<SpecimenFormComponent>) { 

	}

	onNoClick(): void {
		console.log("NO")
		this.dialogRef.close();
	}

	onCloseConfirm() {
		console.log("CONFIRM")
		this.dialogRef.close('Confirm');
	}

	onCloseCancel() {
		this.dialogRef.close('Cancel');
	}

	ngOnInit() {
	}

}
