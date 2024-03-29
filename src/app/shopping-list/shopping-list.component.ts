import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients!: Ingredient[];
  private subscription: Subscription;
  constructor(private slService:ShoppingListService){}

ngOnInit() {
  this.ingredients=this.slService.getIngredients();
  this.subscription =this.slService.ingredientsChanged.subscribe(
    (ingredients:Ingredient[])=>{
      this.ingredients=ingredients;
    }
  );
}
ngOnDestroy() {
  this.subscription.unsubscribe();
}
onEditeItem(index:number){
this.slService.startedEditing.next(index);
}
}
