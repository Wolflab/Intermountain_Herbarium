import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdMenuModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { SpecimenFormComponent } from './specimen-form/specimen-form.component';
import { SpecimenPageComponent } from './specimen-page/specimen-page.component';
import { UsageFormComponent } from './usage-form/usage-form.component';
import { UsagePageComponent } from './usage-page/usage-page.component';

import { DataService } from './services/data/data.service';
import { ScreenSizeService } from './services/screen-size/screen-size.service';

@NgModule({
	declarations: [
		AppComponent,
		AdminPageComponent,
		FileUploadComponent,
		HomePageComponent,
		ServiceFormComponent,
		ServicePageComponent,
		SpecimenFormComponent,
		SpecimenPageComponent,
		UsageFormComponent,
		UsagePageComponent
	],
	entryComponents: [
		ServiceFormComponent,
		SpecimenFormComponent,
		UsageFormComponent
	],
	imports: [
		HttpModule,
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		MdButtonModule,
		MdCardModule,
		MdDialogModule,
		MdGridListModule,
		MdIconModule,
		MdInputModule,
		MdMenuModule,
		MdSelectModule,
		MdSidenavModule,
		MdToolbarModule,
		RouterModule.forRoot([
			{
				path: 'home',
				component: HomePageComponent
			},
			{
				path: 'admin',
				component: AdminPageComponent
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
	providers: [
		DataService,
		ScreenSizeService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
