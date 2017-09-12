import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { UsageFormComponent } from './usage-form/usage-form.component';
import { SpecimenFormComponent } from './specimen-form/specimen-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { SpecimenPageComponent } from './specimen-page/specimen-page.component';
import { UsagePageComponent } from './usage-page/usage-page.component';

@NgModule({
	declarations: [
		AppComponent,
		FileUploadComponent,
		UsageFormComponent,
		SpecimenFormComponent,
		ServiceFormComponent,
		HomePageComponent,
		ServicePageComponent,
		SpecimenPageComponent,
		UsagePageComponent
	],
	imports: [
		HttpModule,
		BrowserModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdCardModule,
		MdIconModule,
		MdInputModule,
		MdToolbarModule,
		RouterModule.forRoot([
			{
				path: 'home',
				component: HomePageComponent
			},
			{
				path: 'service',
				component: ServicePageComponent
			},
			{
				path: 'specimen',
				component: SpecimenPageComponent
			},
			{
				path: 'usage',
				component: UsagePageComponent
			},
			{ 
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
		])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
