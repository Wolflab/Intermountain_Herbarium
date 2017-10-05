import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReportService {
	observers: any[];

	constructor(private http: Http) {
		this.observers = [];
	}

	private update(){
		for(var observer of this.observers){
			observer.update();
		}
	}

	subscribe(obj){
		this.observers.push(obj);
	}

	// addReport(report, callback){
	// 	var parent = this;
	// 	parent.update()
	// 	if(typeof callback == 'function')
	// 		callback("");
	// }

	updateReport(report, callback?){
		var parent = this;
		this.http.post(
			'/reports/update',
			report
		).subscribe(function(res){
			parent.update();
			if(typeof callback == 'function')
				callback(res);
		});
	}

	getAllReports(callback?){
		this.http.get(
			'/reports/all',
		).subscribe(function(res){
			callback(res.json());
		});
	}

	getInterimReport(callback?){
		this.http.get(
			'/reports/interim',
		).subscribe(function(res){
			callback(res.json());
		});
	};

}
