import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';

import { DataService } from '../services/data/data.service';

import Chart from 'chart.js';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
	@ViewChild('chart') chart: ElementRef;

	constructor(public dataService: DataService) { }

	ngOnInit() {
		var parent = this;
		let ctx = this.chart.nativeElement.getContext('2d');
		var myLineChart = new Chart(ctx, {
			type: 'line',
			data: parent.dataService.getData(),
			options: {}
		});
	}

}
