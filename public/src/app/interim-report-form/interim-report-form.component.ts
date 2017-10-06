import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReportService } from '../services/report/report.service';

@Component({
	selector: 'app-interim-report-form',
	templateUrl: './interim-report-form.component.html',
	styleUrls: ['./interim-report-form.component.css']
})
export class InterimReportFormComponent implements OnInit {
	report: Object;

	constructor(public dialogRef: MdDialogRef<InterimReportFormComponent>,
			public reportService: ReportService) { }

	submit(){
		
	}
	
	onCloseCancel(){
		this.dialogRef.close();
	}

	ngOnInit() {
		var parent = this;
		this.reportService.getInterimReport(function(report){
			parent.report = report;
		});
	}

}
