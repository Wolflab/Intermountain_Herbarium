import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MdDialog } from '@angular/material';

import { UsageFormComponent } from '../usage-form/usage-form.component';

import { DataService } from '../services/data/data.service';

import Chart from 'chart.js';

@Component({
	selector: 'app-usage-page',
	templateUrl: './usage-page.component.html',
	styleUrls: ['./usage-page.component.css']
})
export class UsagePageComponent implements OnInit {
	@ViewChild('chart') chart: ElementRef;

	constructor(public dialog: MdDialog,
		public dataService: DataService) { }

	ngOnInit() {
		var parent = this;
		let ctx = this.chart.nativeElement.getContext('2d');
		var myLineChart = new Chart(ctx, {
			type: 'line',
			data: parent.dataService.getUsageData(),
			options: {}
		});
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
