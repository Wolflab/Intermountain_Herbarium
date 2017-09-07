import { Component, OnInit } from '@angular/core';

import { FileUploader } from 'ng2-file-upload';

const URL = 'localhost:3000/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
	public uploader:FileUploader = new FileUploader({url: URL});
	public hasBaseDropZoneOver:boolean = false;

	public fileOverBase(e:any):void {
		this.hasBaseDropZoneOver = e;
	}

	constructor() { 
		
	}

	ngOnInit() {
	}

	upload(){
		console.log("uploading")
		this.uploader.uploadAll()
	}

}
