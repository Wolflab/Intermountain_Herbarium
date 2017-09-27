import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServiceService {

	constructor(private http: Http) { }

	addService(service){
		this.http.post(
			'/service/insert',
			service
		).subscribe(function(res){
			// console.log(res);
		});
	}

	updateService(service){
		this.http.post(
			'/service/update',
			service
		).subscribe(function(res){
			// console.log(res);
		});
	}

	getOpenServices(callback){
		this.http.get(
			'/service/open',
		).subscribe(function(res){
			if(Array.isArray(res.json()))
				callback(res.json());
			else
				callback([]);
		});
	}
}
