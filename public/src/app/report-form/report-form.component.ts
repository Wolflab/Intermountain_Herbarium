import { Component, OnInit, Inject } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReportService } from '../services/report/report.service';

@Component({
	selector: 'app-report-form',
	templateUrl: './report-form.component.html',
	styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
	waiting: boolean;
	report: Object;
	temps: Object;


	constructor(@Inject(MD_DIALOG_DATA) public data: any,
		public dialogRef: MdDialogRef<ReportFormComponent>,
		public reportService: ReportService) { }

	submit(){
			// var report = form.value;
			console.log(this.report);
			this.waiting = true;
			var parent = this;
			this.reportService.updateReport(this.report, function(res){
				parent.dialogRef.close();
				parent.waiting = false;
			});
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
		this.waiting = false;
		this.data = this.data.report;
	}

}
