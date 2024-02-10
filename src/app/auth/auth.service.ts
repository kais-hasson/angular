import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
@Injectable()
export class AuthService{
    constructor(private router:Router){}
    token:string;
    signUpUser(email:string,password:string){
        const auth=getAuth();
      createUserWithEmailAndPassword(auth,email,password).catch(
            error=>console.log(error)
        );
    }
    signInUser(email:string,password:string){
        const auth=getAuth();
        signInWithEmailAndPassword (auth,email,password).then(
            response=>{
                this.router.navigate(['/']);
                getAuth().currentUser.getIdToken().
                then(
                        (token:string)=>this.token=token
                    )
            }
        ).catch(
            error=>console.log(error)
        );}
        getToken(){
            getAuth().currentUser.getIdToken().then(
                (token:string)=>this.token=token
            );
            return this.token;
        }
    isAuthenticated(){
        return this.token!=null;
    }
    logOut(){
        getAuth().signOut();
        this.token=null;
    }
}