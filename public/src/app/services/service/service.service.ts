import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { LoginService } from '../login/login.service';

@Injectable()
export class ServiceService {
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

	addService(service, callback?){
		if(this.loginService.serviceAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			var parent = this;
			this.http.post(
				'/service/insert',
				service,
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

	updateService(service, callback?){
		if(this.loginService.serviceAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			var parent = this;
			this.http.post(
				'/service/update',
				service,
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

	getOpenServices(callback){
		if(this.loginService.serviceAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			this.http.get(
				'/service/open',
				{
					headers: headers
				}
			).subscribe(function(res){
				if(Array.isArray(res.json()))
					callback(res.json());
				else
					callback([]);
			});
		}
	}

	subscribe(obj){
		this.observers.push(obj);
	}
}
