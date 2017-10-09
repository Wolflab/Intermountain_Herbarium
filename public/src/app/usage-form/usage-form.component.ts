import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { UsageService } from '../services/usage/usage.service';

@Component({
	selector: 'app-usage-form',
	templateUrl: './usage-form.component.html',
	styleUrls: ['./usage-form.component.css']
})
export class UsageFormComponent implements OnInit {
	selectedUsage: Object;
	selectedSubUsage: Object;
	usageTypes: Object[];
	names: string[];
	waiting: boolean;

	constructor(public dialogRef: MdDialogRef<UsageFormComponent>,
			public usageService: UsageService) { }

	submit(form){
		if(form.valid){
			console.log("Submitting: ", form.value);
			var usage = <any>{
				usage: form.value.selectedUsage.name,
				subUsage: form.value.selectedSubUsage.name,
				organization: form.value.selectedSubUsage.organization,
				date: new Date().toLocaleDateString(),
				fiscalYear: new Date().getFullYear(),
				purpose: form.value.purpose,
			}
			if(new Date(usage.fiscalYear + "/11/01") <= new Date())
				usage.fiscalYear += 1; 
			if(usage.usage == 'Visitation'){
				usage.names = [];
				for(var i = 0; i < this.names.length; i++)
					usage.names.push(form.value['name' + i]);
				if(usage.organization == 'Utah State University'){
					usage.usage = "USU Visitation";
					if(form.value.studentCount)
						usage.studentCount = parseInt(form.value.studentCount);
					else
						usage.studentCount = 0;
					if(form.value.facultyCount)
						usage.facultyCount = parseInt(form.value.facultyCount);
					else
						usage.facultyCount = 0;
				}else{
					usage.usage = "Other Visitation";
					usage.count = usage.names.length;
				}
			}else if(usage.usage == 'Library Usage'){
				usage.count = parseInt(form.value.count);
			}else if(usage.usage == 'Group Usage'){
				usage.groupName = form.value.groupName;
			}
			this.waiting = true;
			var parent = this;
			this.usageService.addUsage(usage, function(res){
				parent.dialogRef.close();
				parent.waiting = false;
			});
		}
	}

	onCloseCancel(){
		this.dialogRef.close();
	}

	incrementNames(){
		this.names.push(' ');//This is dumb but way easier
	}
	
	ngOnInit() {
		this.waiting = false;
		this.names = [' '];
		this.usageTypes = [
			{
				name: "Group Usage",
				options: [
					{
						name: "Class Usage"
					},
					{
						name: "Other Campus Groups"
					},
					{
						name: "Other Non-Campus Groups"
					}
				]
			},
			{
				name: "Library Usage",
				options: [
					{
						name: "Items Checked Out"
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
						name: "Public",
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
						name: "Miscellaneous",
						preDisplay: "Other - ",
						organization: "Other"
					}
				]
			}
		];
	}
}
