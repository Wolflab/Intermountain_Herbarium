import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ServiceService } from '../services/service/service.service';

@Component({
	selector: 'app-service-form',
	templateUrl: './service-form.component.html',
	styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
	serviceOrganization: string;
	serviceSubOrganization: string;
	organizations: any[];
	waiting: boolean;

	constructor(public dialogRef: MdDialogRef<ServiceFormComponent>,
			public serviceService: ServiceService) {}

	submit(form){
		if(form.valid){
			var service = form.value;
			service.serviceOrganization = service.serviceOrganization.name;
			service.serviceSubOrganization = service.serviceSubOrganization.name;
			service.status = "Open";
			service.date = new Date().toLocaleDateString();
			this.waiting = true;
			var parent = this;
			this.serviceService.addService(service, function(res){
				parent.dialogRef.close();
				parent.waiting = false;
			})
		}
	}

	ngOnInit() {
		this.waiting = false;
		this.organizations = [
			{
				name: "Utah State University",
				suborganizations: [
					{
						name: "Biology"
					},
					{
						name: "Natural Resources"
					},
					{
						name: "Landscape Architecture"
					},
					{
						name: "Plants, Soils, & Biometeorology"
					},
					{
						name: "Extension"
					},
					{
						name: "Miscellaneous"
					},
					{
						name: "UTC development"
					}
				]
			},
			{
				name: "Local",
				suborganizations: [
					{
						name: "Consultants"
					},
					{
						name: "Schools"
					},
					{
						name: "Scouts"
					},
					{
						name: "General Public"
					},
					{
						name: "Miscellaneous"
					}
				]
			},
			{
				name: "Federal Agencies",
				suborganizations: [
					{
						name: "Miscellaneous [NAS, DOD]"
					},
					{
						name: "USDA [ARS, USFS, SCS]"
					},
					{
						name: " USDI [NPS, BLM, NBS]"
					}
				]
			},
			{
				name: "Other",
				suborganizations: [
					{
						name: "Commercial Companies"
					},
					{
						name: "Foreign Governments"
					},
					{
						name: "Non-profit Agencies"
					},
					{
						name: "Other Universities"
					},
					{
						name: "State of Utah [UDOT, UNH]"
					},
					{
						name: "Other states"
					}
				]
			}
		]
	}

}
