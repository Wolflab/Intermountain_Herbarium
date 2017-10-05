import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReportService } from '../services/report/report.service';

@Component({
	selector: 'app-report-form',
	templateUrl: './report-form.component.html',
	styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
	waiting: boolean;

	constructor(public dialogRef: MdDialogRef<ReportFormComponent>,
			public reportService: ReportService) { }

	submit(form){
		if(form.valid){
			console.log(form.value);
			var report = form.value;
			this.waiting = true;
			var parent = this;
			this.reportService.addReport(report, function(res){
				parent.dialogRef.close();
				parent.waiting = false;
			});
		}
	}

	ngOnInit() {
		this.waiting = false;
	}

}
