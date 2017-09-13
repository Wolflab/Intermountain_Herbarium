import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MdDialog } from '@angular/material';

import { SpecimenFormComponent } from '../specimen-form/specimen-form.component';

import { DataService } from '../services/data/data.service';

import Chart from 'chart.js';

@Component({
	selector: 'app-specimen-page',
	templateUrl: './specimen-page.component.html',
	styleUrls: ['./specimen-page.component.css']
})
export class SpecimenPageComponent implements OnInit {
	@ViewChild('chart') chart: ElementRef;

	constructor(public dialog: MdDialog,
		public dataService: DataService) { }

	ngOnInit() {
		var parent = this;
		let ctx = this.chart.nativeElement.getContext('2d');
		var myLineChart = new Chart(ctx, {
			type: 'line',
			data: parent.dataService.getSpecimenData(),
			options: {}
		});
	}

	openDialog(): void {
		let dialogRef = this.dialog.open(SpecimenFormComponent, {
			width: '600px',
		});

		dialogRef.afterClosed().subscribe(result => {
			// console.log('The dialog was closed: ', result);
		});
	}

}
