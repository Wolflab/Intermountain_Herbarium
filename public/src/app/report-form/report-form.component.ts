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
			// this.waiting = true;
			// var parent = this;
			// this.reportService.addReport(report, function(res){
			// 	parent.dialogRef.close();
			// 	parent.waiting = false;
			// });
		}
	}

	ngOnInit() {
		this.waiting = false;
		this.specimenExchangesRecievedInstitutions = "10";
		this.newReport = [
			{
				title: "Specimen Activiy",
				namePrefix: "specimen",
				activities: [
					{
						title: "Collection Development",
						inputs: [
							{
								name: "Institutions",
								placeholder: "Institutions/Individuals"
							},
							{
								name: "Specimens",
								placeholder: "Specimens"
							}
						],
						data: [
							{
								title: "Exchanges Received",
								postName: "ExchangesRecieved"
							},
							{
								title: "Exchanges Sent",
								postName: "ExchangesSent"
							},
							{
								title: "Gifts Received",
								postName: "GiftsRecieved"
							},
							{
								title: "Staff Collections",
								postName: "StaffCollections"
							}
						]
					},
					{
						title: "Database",
						inputs: [
							{
								name: "Database",
								placeholder: "Specimens"
							}
						],
						data: [
							{
								title: "Total Entered",
								postName: "TotalEntered"
							},
							{
								title: "Specimens Entered",
								postName: "SpecimensEntered"
							},
							{
								title: "Georeferenced",
								postName: "Georeferenced"
							},
							{
								title: "Imaged",
								postName: "Imaged"
							},
							{
								title: "Images Processed",
								postName: "ImagesProcessed"
							}
						]
					},
					{
						title: "Other Specimen Activity",
						inputs: [
							{
								name: "Institutions",
								placeholder: "Institutions/Individuals"
							},
							{
								name: "Specimens",
								placeholder: "Specimens"
							}
						],
						data: [
							{
								title: "Loans Sent",
								postName: "LoansSent"
							},
							{
								title: "Loans Received",
								postName: "LoansReceived"
							},
							{
								title: "Loans Returned to UTC",
								postName: "LoansReturnedToUTC"
							},
							{
								title: "Loans Returned by UTC",
								postName: "LoansReturnedByUTC"
							},
							{
								title: "Loans Transferred by UTC",
								postName: "LoansTransferredByUTC"
							},
							{
								title: "Local Loans",
								postName: "LocalLoans"
							},
							{
								title: "Photographic Slides Loaned",
								postName: "PhotographicSlidesLoaned"
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
						inputs: [
							{
								name: "Time",
								placeholder: "Time"
							},
							{
								name: "Requests",
								placeholder: "Requests"
							}
						],
						data: [
							{
								title: "Biology",
								postName: "Biology"
							},
							{
								title: "Natural Resources",
								postName: "NaturalResources"
							},
							{
								title: "Landscape Architecture",
								postName: "LandscapeArchitecture"
							},
							{
								title: "Plants, Soils, & Biometeorology",
								postName: "PlantsSoilsBiometeorology"
							},
							{
								title: "Extension",
								postName: "Extension"
							},
							{
								title: "Miscellaneous",
								postName: "Misc"
							},
							{
								title: "UTC Development",
								postName: "UTCDevelopment"
							}
						]
					},
					{
						title: "Local",
						inputs: [
							{
								name: "Time",
								placeholder: "Time"
							},
							{
								name: "Requests",
								placeholder: "Requests"
							}
						],
						data: [
							{
								title: "Consultants",
								postName: "LocalConsultants"
							},
							{
								title: "Schools",
								postName: "LocalSchools"
							},
							{
								title: "Scouts",
								postName: "LocalScouts"
							},
							{
								title: "General Public",
								postName: "LocalGeneralPublic"
							},
							{
								title: "Miscellaneous",
								postName: "Local"
							}
						]
					},
					{
						title: "Federal Agencies",
						inputs: [
							{
								name: "Time",
								placeholder: "Time"
							},
							{
								name: "Requests",
								placeholder: "Requests"
							}
						],
						data: [
							{
								title: "USDA [ARS, USFS, SCS]",
								postName: "FedUSDA"
							},
							{
								title: "USDI [NPS, BLM, NBS]",
								postName: "FedUSDI"
							},
							{
								title: "Miscellaneous [NAS, DOD]",
								postName: "FedMisc"
							}
						]
					},
					{
						title: "Other",
						inputs: [
							{
								name: "Time",
								placeholder: "Time"
							},
							{
								name: "Requests",
								placeholder: "Requests"
							}
						],
						data: [
							{
								title: "Commercial Companies",
								postName: "OtherCommercial"
							},
							{
								title: "Foreign Governments",
								postName: "OtherForeignGovernments"
							},
							{
								title: "Non-Profit Agencies",
								postName: "OtherNonProfits"
							},
							{
								title: "Other Universities",
								postName: "OtherUniversities"
							},
							{
								title: "State of Utah [UDOT, UNH]",
								postName: "StateOfUtah"
							},
							{
								title: "Other States",
								postName: "OtherStates"
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
						inputs: [
							{
								name: "Count",
								placeholder: "Count"
							}
						],
						data: [
							{
								title: "Items Checked Out",
								postName: "ItemsCheckedOut"
							},
							{
								title: "Visits",
								postName: "Visits"
							}
						]
					},
					{
						title: "USU Visitation",
						inputs: [
							{
								name: "FacultyCount",
								placeholder: "Faculty Count"
							},
							{
								name: "StudentCount",
								placeholder: "Student Count"
							}
						],
						data: [
							{
								title: "Biology",
								postName: "UsuBiology"
							},
							{
								title: "Natural Resources",
								postName: "UsuNaturalResources"
							},
							{
								title: "Landscape Architecture",
								postName: "UsuLandscapeArchitecture"
							},
							{
								title: "Plants, Soils, & Biometeorology",
								postName: "UsuPlantsSoilsBiometeorology"
							},
							{
								title: "Extension",
								postName: "UsuExtension"
							},
							{
								title: "Miscellaneous",
								postName: "UsuMisc"
							}
						]
					},
					{
						title: "Other Visitation",
						inputs: [
							{
								name: "Count",
								placeholder: "Count"
							}
						],
						data: [
							{
								title: "Federal Agency USDI",
								postName: "FedUSDI"
							},
							{
								title: "Federal Agency USDA",
								postName: "FedUSDA"
							},
							{
								title: "Commercial",
								postName: "Commercial"
							},
							{
								title: "Consultants",
								postName: "Consultants"
							},
							{
								title: "Other Herbaria and Universities",
								postName: "OtherHerbariaAndUniversities"
							},
							{
								title: "Non-profit Agencies",
								postName: "NonProfits"
							},
							{
								title: "Public",
								postName: "Public"
							},
							{
								title: "Boy Scouts",
								postName: "BoyScouts"
							},
							{
								title: "State Of Utah",
								postName: "StateOfUtah"
							},
							{
								title: "Other Miscellaneous",
								postName: "OtherMisc"
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
						inputs: [
							{
								name: "Count",
								placeholder: "Count"
							}
						],
						data: [
							{
								title: "Page Likes",
								postName: "PageLikes"
							},
							{
								title: "Reach - Utah",
								postName: "ReachUtah"
							},
							{
								title: "Reach - USA & territories",
								postName: "ReachUS"
							},
							{
								title: "Reach - Non US",
								postName: "ReachNonUS"
							},
							{
								title: "Number of Posts",
								postName: "NumberOfPosts"
							},
							{
								title: "Post Reach (Max)",
								postName: "PostReachMax"
							},
							{
								title: "Post Reach (Average)",
								postName: "PostReachAverage"
							},
							{
								title: "Post Engagement (Max)",
								postName: "PostEngagementMax"
							},
							{
								title: "Post Engagement (Average)",
								postName: "PostEngagementAverage"
							}
						]
					}
				]
			},
		]
	}

}
