import { Injectable } from '@angular/core';

@Injectable()
export class ScreenSizeService {
	width: number;
	height: number;
	mobile: boolean;
	
	constructor() { }

}