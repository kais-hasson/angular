import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthRoutingModule } from "./auth-routing.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    declarations:[
    SignupComponent,
    SigninComponent
    ],
    imports:[
        FormsModule,
        AuthRoutingModule
    ]
})
export class AuthModule{}