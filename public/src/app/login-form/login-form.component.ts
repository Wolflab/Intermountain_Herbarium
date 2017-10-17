import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { LoginService } from '../services/login/login.service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	key: string;
	failed: boolean;

	constructor(public dialogRef: MdDialogRef<LoginFormComponent>,
			public loginService: LoginService) {}


	submit(form){
		var parent = this;
		this.loginService.login(form.value.password, function(res){
			if(res._body){
				parent.key = res._body;
				parent.dialogRef.close()
			}else{
				this.failed = true;
			}
		});

	}

	onCloseCancel(){
		this.dialogRef.close();
	}

	ngOnInit() {
		this.failed = false;
		this.key = '';
	}

}
