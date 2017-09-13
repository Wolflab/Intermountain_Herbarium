import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

	constructor() { }

	getData(){
		return {
			labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			datasets: [{
			  label: 'apples',
			  data: [12, 19, 3, 17, 6, 3, 7],
			  backgroundColor: "rgba(63,81,181,0.4)"
			}, {
			  label: 'oranges',
			  data: [2, 29, 5, 5, 2, 3, 10],
			  backgroundColor: "rgba(57,73,171,0.4)"
			}]
		}
	}

	getServiceData(){
		return {
			labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			datasets: [{
			  label: 'service',
			  data: [12, 19, 3, 17, 6, 3, 7],
			  backgroundColor: "rgba(153,255,51,0.4)"
			}, {
			  label: 'oranges',
			  data: [2, 29, 5, 5, 2, 3, 10],
			  backgroundColor: "rgba(255,153,0,0.4)"
			}]
		}
	}

	getSpecimenData(){
		return {
			labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			datasets: [{
			  label: 'specimen',
			  data: [12, 19, 3, 17, 6, 3, 7],
			  backgroundColor: "rgba(153,255,51,0.4)"
			}, {
			  label: 'oranges',
			  data: [2, 29, 5, 5, 2, 3, 10],
			  backgroundColor: "rgba(255,153,0,0.4)"
			}]
		}
	}

	getUsageData(){
		return {
			labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
			datasets: [{
			  label: 'usage',
			  data: [12, 19, 3, 17, 6, 3, 7],
			  backgroundColor: "rgba(153,255,51,0.4)"
			}, {
			  label: 'oranges',
			  data: [2, 29, 5, 5, 2, 3, 10],
			  backgroundColor: "rgba(255,153,0,0.4)"
			}]
		}
	}
}
