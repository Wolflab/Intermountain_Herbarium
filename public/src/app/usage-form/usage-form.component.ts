import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
	selector: 'app-usage-form',
	templateUrl: './usage-form.component.html',
	styleUrls: ['./usage-form.component.css']
})
export class UsageFormComponent implements OnInit {
	selectedUsage: Object;
	selectedSubUsage: Object;
	usageTypes: Object[];

	constructor(public dialogRef: MdDialogRef<UsageFormComponent>) { }

	onUsageChange(event){
		console.log(event);
	}

	submit(form){
		if(form.valid){
			console.log("Submitting: ", form);
			this.dialogRef.close();
		}
	}
	
	ngOnInit() {
		this.usageTypes = [
			{
				name: "Group Usage"
			},
			{
				name: "Library Usage",
				options: [
					{
						name: "Items checked out"
					},
					{
						name: "Visits"
					}
				]
			},
			{
				name: "Visitation",
				options: [
					{
						name: "Biology",
						preDisplay: "USU - ",
						organization: "Utah State University",
					},
					{
						name: "Natural Resources",
						preDisplay: "USU - ",
						organization: "Utah State University"
					},
					{
						name: "Landscape Architecture",
						preDisplay: "USU - ",
						organization: "Utah State University"
					},
					{
						name: "Plants, Soils, & Biometeorology",
						preDisplay: "USU - ",
						organization: "Utah State University"
					},
					{
						name: "Extension",
						preDisplay: "USU - ",
						organization: "Utah State University"
					},
					{
						name: "Miscellaneous U.S.U.",
						preDisplay: "USU - ",
						organization: "Utah State University"
					},
					{
						name: "U.S.D.A.",
						preDisplay: "Federal - ",
						organization: "Federal Agency"
					},
					{
						name: "U.S.D.I.",
						preDisplay: "Federal - ",
						organization: "Federal Agency"
					},
					{
						name: "Commercial",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: "Consultants",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: "Other Herbaria and Universities",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: "Non-profit Agencies",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: " Public",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: "Boy Scouts",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: "State of Utah",
						preDisplay: "Other - ",
						organization: "Other"
					},
					{
						name: " Miscellaneous",
						preDisplay: "Other - ",
						organization: "Other"
					}
				]
			}
		];
	}

}
