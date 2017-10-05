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
								title: "Local Consultants",
								postName: "LocalConsultants"
							},
							{
								title: "Local Schools",
								postName: "LocalSchools"
							},
							{
								title: "Local Scouts",
								postName: "LocalScouts"
							},
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
						title: "Visitation",
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
								title: "USU Biology",
								postName: "UsuBiology"
							},
							{
								title: "USU Natural Resources",
								postName: "UsuNaturalResources"
							},
							{
								title: "USU Landscape Architecture",
								postName: "UsuLandscapeArchitecture"
							},
						]
					}
				]
			}
		]
	}

}
