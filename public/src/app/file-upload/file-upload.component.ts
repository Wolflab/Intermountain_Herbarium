import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';



const URL = '/upload/';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
	@ViewChild('inputFile') nativeInputFile: ElementRef;
	src: string;

	constructor(public http: Http) { 
		
	}

	ngOnInit() {
	}


	selectFile() {
		this.nativeInputFile.nativeElement.click();
	}

	fileChange(event) {
		var parent = this;
		let fileList: FileList = event.target.files;
		if(fileList.length > 0) {
			let file: File = fileList[0];
			let formData:FormData = new FormData();
			formData.append('uploadFile', file, file.name);
			let headers = new Headers();
			/** No need to include Content-Type in Angular 4 */
			// headers.append('Content-Type', 'multipart/form-data');
			headers.append('Accept', 'application/json');
			let options = new RequestOptions({ headers: headers });
			this.http.post(`${URL}`, formData, options)
				.map(function(res){
					parent.src = res.json().src;
				})
				.subscribe(
					data => console.log('success'),
					error => console.log(error)
				)
		}
	}

}
