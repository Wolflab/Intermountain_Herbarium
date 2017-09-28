import { Component, ViewChild } from '@angular/core';

import { MdSidenav } from '@angular/material';

import { ScreenSizeService } from './services/screen-size/screen-size.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('sidenav') sidenav: MdSidenav;

	menuClick(){
		this.sidenav.toggle();
	}

	onResize(event) {
		this.screenSizeService.width = window.innerWidth;
		this.screenSizeService.height = window.innerHeight;
		this.screenSizeService.mobile = window.innerWidth < 1050;
	}
	constructor(public screenSizeService: ScreenSizeService) {
		screenSizeService.width = window.innerWidth;
		screenSizeService.height = window.innerHeight;
		screenSizeService.mobile = window.innerWidth < 1050;
	
		// this.location = location;
		// console.log(this.location.path());
	}
}
