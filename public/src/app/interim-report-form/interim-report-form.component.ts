import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ObjectIteratorPipe } from '../pipes/object-iterator/object-iterator.pipe';
import { ReportService } from '../services/report/report.service';


@Component({
	selector: 'app-interim-report-form',
	templateUrl: './interim-report-form.component.html',
	styleUrls: ['./interim-report-form.component.css']
})
export class InterimReportFormComponent implements OnInit {
	waiting: boolean;
	data: Object;

	constructor(public dialogRef: MdDialogRef<InterimReportFormComponent>,
			public reportService: ReportService) {
	}

	submit(){
		
	}
	
	onCloseCancel(){
		this.dialogRef.close();
	}

	addGroup(datum){
		datum.inputs.push({
			name: "Name",
			placeholder: "Name"
		})
	}

	oddInputs(datum){
		return Object.keys(datum.inputs).length % 2 == 1;
	}

	ngOnInit() {
		this.waiting = true;
		var parent = this;
		this.reportService.getInterimReport(function(data){
			parent.data = data;
			parent.waiting = false;
			console.log(parent.data)
		});
	}

}
