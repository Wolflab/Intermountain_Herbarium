import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ReportService {
	observers: any[];

	constructor(private http: Http) { }

	private update(){
		for(var observer of this.observers){
			observer.update();
		}
	}

	subscribe(obj){
		this.observers.push(obj);
	}

	addReport(report, callback){
		var parent = this;
		parent.update()
		if(typeof callback == 'function')
			callback("");
	}

	updateReport(report, callback){
		var parent = this;
		parent.update()
		if(typeof callback == 'function')
			callback("");
	}

}
