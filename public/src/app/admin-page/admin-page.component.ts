import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';


import { InterimReportFormComponent } from '../interim-report-form/interim-report-form.component';
import { ReportFormComponent } from '../report-form/report-form.component';
import { ServiceFormComponent } from '../service-form/service-form.component';
import { ServiceReviewFormComponent } from '../service-review-form/service-review-form.component';
import { UsageFormComponent } from '../usage-form/usage-form.component';

import { ReportService } from '../services/report/report.service';
import { ScreenSizeService } from '../services/screen-size/screen-size.service';
import { ServiceService } from '../services/service/service.service';
import { UsageService } from '../services/usage/usage.service';

@Component({
	selector: 'app-admin-page',
	templateUrl: './admin-page.component.html',
	styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
	openServices: any[];
	reports: Object[];

	constructor(public dialog: MdDialog,
			public reportService: ReportService,
			public screenSizeService: ScreenSizeService, 
			public serviceService: ServiceService,
			public usageService: UsageService) {
		serviceService.subscribe(this);
		reportService.subscribe(this);
	}

	update(){
		var parent = this;
		this.serviceService.getOpenServices(function(response){
			parent.openServices = response;
		});
		this.reportService.getAllReports(function(reports){
			parent.reports = reports;
		});
	}

	ngOnInit() {
		this.update();
	}

	openServiceDialog(): void {
		let dialogRef = this.dialog.open(ServiceFormComponent, {
			width: '600px',
		});
	}

	openServiceCompletionDialog(service): void {
		let dialogRef = this.dialog.open(ServiceReviewFormComponent, {
			width: '600px',
			data: { service: service }
		});
	}

	openInterimReportDialog(): void {
		let dialogRef = this.dialog.open(InterimReportFormComponent, {
			width: '600px',
		});
	}

	openReportDialog(report): void {
		let dialogRef = this.dialog.open(ReportFormComponent, {
			width: '600px',
			data: { report: report }
		});
	}

	openUsageDialog(): void {
		let dialogRef = this.dialog.open(UsageFormComponent, {
			width: '600px',
		});
	}

}
