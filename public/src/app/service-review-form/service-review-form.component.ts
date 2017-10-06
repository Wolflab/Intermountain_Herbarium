import { Component, OnInit, Inject } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ServiceService } from '../services/service/service.service';


@Component({
  selector: 'app-service-review-form',
  templateUrl: './service-review-form.component.html',
  styleUrls: ['./service-review-form.component.css']
})
export class ServiceReviewFormComponent implements OnInit {
	waiting: boolean;

	constructor(@Inject(MD_DIALOG_DATA) public data: any,
			public dialogRef: MdDialogRef<ServiceReviewFormComponent>,
			public serviceService: ServiceService) { }

	submit(form){
		if(form.valid){
			if(!form.value.charge)
				form.value.charge = "0";
			var service = Object.assign({}, form.value, this.data);
			service.status = "Closed";
			service.time = parseInt(service.time);
			service.charge = parseInt(service.charge);
			service.dateCompleted = new Date().toLocaleDateString();
			service.fiscalYear = new Date().getFullYear();
			if(new Date(service.fiscalYear + "/11/01") <= new Date())
				service.fiscalYear += 1; 
			this.waiting = true;
			var parent = this;
			this.serviceService.updateService(service, function(res){
				parent.dialogRef.close();
				parent.waiting = false;
			})
		}
	}

	onCloseCancel(){
		this.dialogRef.close();
	}

	ngOnInit() {
		this.waiting = false;
		this.data = this.data.service;
	}
}
