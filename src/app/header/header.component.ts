import { HttpResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService:DataStorageService,
   public authService:AuthService){}
  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response:Response)=>{
        console.log(response);
      }
    );
  }
  onFetchData(){
    this.dataStorageService.getRecipes();
  }
  onLogOut(){
    this.authService.logOut();
  }
}
