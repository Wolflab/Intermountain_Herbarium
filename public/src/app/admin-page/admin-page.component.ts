import { Component, OnInit } from '@angular/core';

import { MdDialog } from '@angular/material';


import { ServiceFormComponent } from '../service-form/service-form.component';
import { ServiceReviewFormComponent } from '../service-review-form/service-review-form.component';
import { UsageFormComponent } from '../usage-form/usage-form.component';

import { ServiceService } from '../services/service/service.service';
import { UsageService } from '../services/usage/usage.service';

@Component({
	selector: 'app-admin-page',
	templateUrl: './admin-page.component.html',
	styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
	openServices: any[];

	constructor(public dialog: MdDialog,
			public serviceService: ServiceService,
			public usageService: UsageService) { }

	ngOnInit() {
		var parent = this;
		this.serviceService.getOpenServices(function(response){
			parent.openServices = response;
		});
	}

	openServiceDialog(): void {
		let dialogRef = this.dialog.open(ServiceFormComponent, {
			width: '600px',
		});
	}

	openServiceCompletionDialog(service): void {
		let dialogRef = this.dialog.open(ServiceReviewFormComponent, {
			width: '600px',
			data: { service: service }
		});
	}

	openUsageDialog(): void {
		let dialogRef = this.dialog.open(UsageFormComponent, {
			width: '600px',
		});
	}

}
