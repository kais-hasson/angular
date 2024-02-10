import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature='recipe';
 onNavigate(feature:string){
  this.loadedFeature=feature;
 }
 ngOnInit(){
  const firebaseConfig = {
    apiKey: "AIzaSyDxln--sqh6YUNVUq6Jys0X-49cKiP8-Lw",
    authDomain: "kais-api.firebaseapp.com",
  };
  const app = initializeApp(firebaseConfig);

 }
}
