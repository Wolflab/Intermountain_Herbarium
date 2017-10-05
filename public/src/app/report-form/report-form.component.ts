import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { ReportService } from '../services/report/report.service';

@Component({
	selector: 'app-report-form',
	templateUrl: './report-form.component.html',
	styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {
	waiting: boolean;
	newReport: Object;
	specimenExchangesRecievedInstitutions: string;

	constructor(public dialogRef: MdDialogRef<ReportFormComponent>,
			public reportService: ReportService) { }

	submit(){
			// var report = form.value;
			console.log(this.newReport);
			// this.waiting = true;
			// var parent = this;
			// this.reportService.addReport(report, function(res){
			// 	parent.dialogRef.close();
			// 	parent.waiting = false;
			// });
	}

	addGroup(datum){
		datum.inputs.push({
			name: "Name",
			placeholder: "Name"
		})
	}

	ngOnInit() {
		this.waiting = false;
		this.newReport = [
			{
				title: "Specimen Activiy",
				activities: [
					{
						data: [
							{
								title: "Specimen Total",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
						]
					},
					{
						title: "Collection Development",
						data: [
							{
								title: "Exchanges Received",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Exchanges Sent",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Gifts Received",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Staff Collections",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							}
						]
					},
					{
						title: "Database",
						data: [
							{
								title: "Total Entered",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Specimens Entered",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Georeferenced",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Imaged",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Images Processed",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							}
						]
					},
					{
						title: "Other Specimen Activity",
						data: [
							{
								title: "Loans Sent",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Loans Received",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Loans Returned to UTC",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Loans Returned by UTC",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Loans Transferred by UTC",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Local Loans",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Photographic Slides Loaned",
								inputs: [
									{
										name: "Institutions",
										placeholder: "Institutions/Individuals"
									},
									{
										name: "Specimens",
										placeholder: "Specimens"
									}
								]
							}
						]
					}
				]
			},
			{
				title: "Service Activiy",
				activities: [
					{
						title: "Utah State University",
						data: [
							{
								title: "Biology",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Natural Resources",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Landscape Architecture",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Plants, Soils, & Biometeorology",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Extension",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Miscellaneous",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "UTC Development",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							}
						]
					},
					{
						title: "Local",
						data: [
							{
								title: "Consultants",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Schools",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Scouts",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "General Public",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Miscellaneous",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							}
						]
					},
					{
						title: "Federal Agencies",
						data: [
							{
								title: "USDA [ARS, USFS, SCS]",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "USDI [NPS, BLM, NBS]",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Miscellaneous [NAS, DOD]",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							}
						]
					},
					{
						title: "Other",
						data: [
							{
								title: "Commercial Companies",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Foreign Governments",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Non-Profit Agencies",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Other Universities",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "State of Utah [UDOT, UNH]",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							},
							{
								title: "Other States",
								inputs: [
									{
										name: "Time",
										placeholder: "Time"
									},
									{
										name: "Requests",
										placeholder: "Requests"
									}
								]
							}
						]
					}
				]
			},
			{
				title: "Usage Activiy",
				activities: [
					{
						title: "Library Activity",
						data: [
							{
								title: "Items Checked Out",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Visits",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							}
						]
					},
					{
						title: "USU Visitation",
						data: [
							{
								title: "Biology",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							},
							{
								title: "Natural Resources",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							},
							{
								title: "Landscape Architecture",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							},
							{
								title: "Plants, Soils, & Biometeorology",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							},
							{
								title: "Extension",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							},
							{
								title: "Miscellaneous",
								inputs: [
									{
										name: "FacultyCount",
										placeholder: "Faculty Count"
									},
									{
										name: "StudentCount",
										placeholder: "Student Count"
									}
								]
							}
						]
					},
					{
						title: "Other Visitation",
						data: [
							{
								title: "Federal Agency USDI",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Federal Agency USDA",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Commercial",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Consultants",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Other Herbaria and Universities",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Non-profit Agencies",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Public",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Boy Scouts",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "State Of Utah",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Other Miscellaneous",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							}
						]
					},
					{
						title: "Group Usage",
						data: [
							{
								title: "Class Usage",
								openEnded: true,
								inputs: [
									{
										name: "Name",
										placeholder: "Name"
									}
								]
							},
							{
								title: "Other Campus Groups",
								openEnded: true,
								inputs: [
									{
										name: "Name",
										placeholder: "Name"
									}
								]
							},
							{
								title: "Other Non-Campus Groups",
								openEnded: true,
								inputs: [
									{
										name: "Name",
										placeholder: "Name"
									}
								]
							}
						]
					}
				]
			},
			{
				title: "Facebook Activiy",
				activities: [
					{
						data: [
							{
								title: "Page Likes",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - Utah",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - USA & territories",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - Non US",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Number of Posts",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Reach (Max)",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Reach (Average)",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Engagement (Max)",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Engagement (Average)",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							}
						]
					}
				]
			},
		]
	}

}
