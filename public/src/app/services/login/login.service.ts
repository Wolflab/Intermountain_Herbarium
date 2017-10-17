import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class LoginService {
	observers: any[];
	loggedIn: boolean;
	reportAuth: boolean;
	serviceAuth: boolean;
	usageAuth: boolean;
	key: string;

	constructor(public http: Http) {
		this.observers = [];
		this.loggedIn = false;
		this.reportAuth = false;
		this.serviceAuth = false;
		this.usageAuth = false;
	}

	private update(){
		for(var observer of this.observers){
			observer.update();
		}
	}

	subscribe(obj){
		this.observers.push(obj);
	}

	login(password, callback?){
		const parent = this;
		const hash = Md5.hashStr(password);
		this.http.post(
			'/login/',
			{
				hash: hash
			}
		).subscribe(function(res){
			const data = res.json();
			if(data.key){
				parent.loggedIn = true;
				parent.key = data.key;
				parent.reportAuth = data.reportAuth;
				parent.serviceAuth = data.serviceAuth;
				parent.usageAuth = data.usageAuth;
			}
			parent.update();
			if(typeof callback == 'function')
				callback(res);
		});
	}

}
