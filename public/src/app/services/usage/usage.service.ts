import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { LoginService } from '../login/login.service';

@Injectable()
export class UsageService {
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
	
	addUsage(usage, callback?){
		if(this.loginService.usageAuth){
			let headers = new Headers();
			headers.append('key', this.loginService.key);
			this.http.post(
				'/usage/insert',
				usage,
				{
					headers: headers
				}
			).subscribe(function(res){
				if(typeof callback == 'function')
					callback(res);
			});
		}
	}

}
