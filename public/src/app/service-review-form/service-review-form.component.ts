import { Component, OnInit, Inject } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ServiceService } from '../services/service/service.service';


@Component({
  selector: 'app-service-review-form',
  templateUrl: './service-review-form.component.html',
  styleUrls: ['./service-review-form.component.css']
})
export class ServiceReviewFormComponent implements OnInit {

	constructor(@Inject(MD_DIALOG_DATA) public data: any,
			public dialogRef: MdDialogRef<ServiceReviewFormComponent>,
			public serviceService: ServiceService) { }

	ngOnInit() {
		this.data = this.data.service;
	}

	submit(form){
		if(form.valid){
			if(!form.value.charge)
				form.value.charge = "0";
			var service = Object.assign({}, form.value, this.data);
			service.status = "Closed";
			service.dateCompleted = new Date().toLocaleDateString();
			this.serviceService.updateService(service);
			this.dialogRef.close();
			window.location.reload();
		}
	}



}
