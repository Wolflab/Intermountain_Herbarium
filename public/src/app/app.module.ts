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
import { MdProgressSpinnerModule } from '@angular/material';
import { MdTabsModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { InterimReportFormComponent } from './interim-report-form/interim-report-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReportFormComponent } from './report-form/report-form.component';
import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceReviewFormComponent } from './service-review-form/service-review-form.component';
import { UsageFormComponent } from './usage-form/usage-form.component';

import { LoginService } from './services/login/login.service';
import { ReportService } from './services/report/report.service';
import { UsageService } from './services/usage/usage.service';
import { ScreenSizeService } from './services/screen-size/screen-size.service';
import { ServiceService } from './services/service/service.service';
import { ObjectIteratorPipe } from './pipes/object-iterator/object-iterator.pipe';

@NgModule({
	declarations: [
		AppComponent,
		AdminPageComponent,
		InterimReportFormComponent,
		ReportFormComponent,
		ServiceFormComponent,
		ServiceReviewFormComponent,
		UsageFormComponent,
		ObjectIteratorPipe,
		LoginFormComponent
	],
	entryComponents: [
		LoginFormComponent,
		InterimReportFormComponent,
		ReportFormComponent,
		ServiceFormComponent,
		ServiceReviewFormComponent,
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
		MdProgressSpinnerModule,
		MdTabsModule,
		MdToolbarModule,
		RouterModule.forRoot([
			{
				path: 'home',
				component: AdminPageComponent
			},
			{ 
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
		])
	],
	providers: [
		LoginService,
		ReportService,
		UsageService,
		ScreenSizeService,
		ServiceService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
