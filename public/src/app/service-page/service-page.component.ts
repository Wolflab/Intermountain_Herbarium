import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { DataService } from '../services/data/data.service';

import Chart from 'chart.js';

@Component({
	selector: 'app-service-page',
	templateUrl: './service-page.component.html',
	styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {
	@ViewChild('chart') chart: ElementRef;

	constructor(public dataService: DataService) { }

	ngOnInit() {
		var parent = this;
		let ctx = this.chart.nativeElement.getContext('2d');
		var myLineChart = new Chart(ctx, {
			type: 'line',
			data: parent.dataService.getServiceData(),
			options: {}
		});
	}

}