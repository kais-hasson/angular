import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private authService:AuthService){}
  onSignUp(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    this.authService.signUpUser(email,password);
  }
}
