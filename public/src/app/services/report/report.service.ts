import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { LoginService } from '../login/login.service';

@Injectable()
export class ReportService {
	observers: any[];

	constructor(private http: Http,
			public loginService: LoginService) {
		this.observers = [];
		loginService.subscribe(this);
	}

	public update(){
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
		if(this.loginService.reportAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			var parent = this;
			this.http.post(
				'/reports/update',
				report,
				{
					headers: headers
				}
			).subscribe(function(res){
				parent.update();
				if(typeof callback == 'function')
					callback(res);
			});
		}
	}

	getAllReports(callback?){
		if(this.loginService.reportAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			this.http.get(
				'/reports/all',
				{
					headers: headers
				}
			).subscribe(function(res){
				callback(res.json());
			});
		}
	}

	getInterimReport(callback?){
		if(this.loginService.reportAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			this.http.get(
				'/reports/interim',
				{
					headers: headers
				}
			).subscribe(function(res){
				// console.log(res.json())
				callback(res.json());
			});
		}
	};

	insertReport(report, callback?){
		if(this.loginService.reportAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			var parent = this;
			this.http.post(
				'/reports/insert',
				report,
				{
					headers: headers
				}
			).subscribe(function(res){
				parent.update();
				if(typeof callback == 'function')
					callback(res);
			});
		}
	}

}
