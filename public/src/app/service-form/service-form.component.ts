import { Component, OnInit } from '@angular/core';

import { FileUploadComponent } from '../file-upload/file-upload.component';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.css']
})
export class ServiceFormComponent implements OnInit {
	serviceOrganization: string;
	serviceSubOrganization: string;

	organizations: any[];

	constructor() { 
	}

	submit(form){
		console.log(form.valid);
		console.log(form.value);
	}

	ngOnInit() {
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
