import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServiceService {
	observers: any[];

	constructor(private http: Http) {
		this.observers = [];
	}

	private update(){
		for(var observer of this.observers){
			observer.update();
		}
	}

	addService(service, callback?){
		var parent = this;
		this.http.post(
			'/service/insert',
			service
		).subscribe(function(res){
			parent.update();
			if(typeof callback == 'function')
				callback(res);
		});
	}

	updateService(service, callback?){
		var parent = this;
		this.http.post(
			'/service/update',
			service
		).subscribe(function(res){
			parent.update();
			if(typeof callback == 'function')
				callback(res);
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

	subscribe(obj){
		this.observers.push(obj);
	}
}
