import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsageService {

	constructor(private http: Http) { }
	
	addUsage(usage){
		this.http.post(
			'/usage/insert',
			usage
		).subscribe(function(res){
			console.log(res);
		});
	}

}
