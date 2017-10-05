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

	submit(form){
		if(form.valid){
			console.log(form.value);
			var report = form.value;
			console.log(this.newReport);
			// this.waiting = true;
			// var parent = this;
			// this.reportService.addReport(report, function(res){
			// 	parent.dialogRef.close();
			// 	parent.waiting = false;
			// });
		}
	}

	addGroup(datum){
		console.log(datum);
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
				namePrefix: "specimen",
				activities: [
					{
						data: [
							{
								title: "Specimen Total",
								postName: "SpecimenTotal",
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
								postName: "ExchangesRecieved",
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
								postName: "ExchangesSent",
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
								postName: "GiftsRecieved",
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
								postName: "StaffCollections",
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
								postName: "TotalEntered",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Specimens Entered",
								postName: "SpecimensEntered",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Georeferenced",
								postName: "Georeferenced",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Imaged",
								postName: "Imaged",
								inputs: [
									{
										name: "Database",
										placeholder: "Specimens"
									}
								]
							},
							{
								title: "Images Processed",
								postName: "ImagesProcessed",
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
								postName: "LoansSent",
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
								postName: "LoansReceived",
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
								postName: "LoansReturnedToUTC",
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
								postName: "LoansReturnedByUTC",
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
								postName: "LoansTransferredByUTC",
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
								postName: "LocalLoans",
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
								postName: "PhotographicSlidesLoaned",
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
				namePrefix: "service",
				activities: [
					{
						title: "Utah State University",
						data: [
							{
								title: "Biology",
								postName: "Biology",
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
								postName: "NaturalResources",
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
								postName: "LandscapeArchitecture",
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
								postName: "PlantsSoilsBiometeorology",
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
								postName: "Extension",
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
								postName: "Misc",
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
								postName: "UTCDevelopment",
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
								postName: "LocalConsultants",
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
								postName: "LocalSchools",
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
								postName: "LocalScouts",
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
								postName: "LocalGeneralPublic",
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
								postName: "Local",
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
								postName: "FedUSDA",
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
								postName: "FedUSDI",
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
								postName: "FedMisc",
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
								postName: "OtherCommercial",
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
								postName: "OtherForeignGovernments",
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
								postName: "OtherNonProfits",
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
								postName: "OtherUniversities",
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
								postName: "StateOfUtah",
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
								postName: "OtherStates",
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
				namePrefix: "usage",
				activities: [
					{
						title: "Library Activity",
						data: [
							{
								title: "Items Checked Out",
								postName: "ItemsCheckedOut",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Visits",
								postName: "Visits",
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
								postName: "UsuBiology",
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
								postName: "UsuNaturalResources",
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
								postName: "UsuLandscapeArchitecture",
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
								postName: "UsuPlantsSoilsBiometeorology",
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
								postName: "UsuExtension",
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
								postName: "UsuMisc",
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
								postName: "FedUSDI",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Federal Agency USDA",
								postName: "FedUSDA",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Commercial",
								postName: "Commercial",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Consultants",
								postName: "Consultants",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Other Herbaria and Universities",
								postName: "OtherHerbariaAndUniversities",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Non-profit Agencies",
								postName: "NonProfits",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Public",
								postName: "Public",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Boy Scouts",
								postName: "BoyScouts",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "State Of Utah",
								postName: "StateOfUtah",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Other Miscellaneous",
								postName: "OtherMisc",
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
								postName: "ClassUsage",
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
								postName: "OtherCampusGroups",
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
								postName: "OtherNonCampusGroups",
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
				namePrefix: "facebook",
				activities: [
					{
						data: [
							{
								title: "Page Likes",
								postName: "PageLikes",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - Utah",
								postName: "ReachUtah",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - USA & territories",
								postName: "ReachUS",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Reach - Non US",
								postName: "ReachNonUS",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Number of Posts",
								postName: "NumberOfPosts",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Reach (Max)",
								postName: "PostReachMax",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Reach (Average)",
								postName: "PostReachAverage",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Engagement (Max)",
								postName: "PostEngagementMax",
								inputs: [
									{
										name: "Count",
										placeholder: "Count"
									}
								]
							},
							{
								title: "Post Engagement (Average)",
								postName: "PostEngagementAverage",
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
