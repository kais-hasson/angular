import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable()
export class DataStorageService implements OnInit{
constructor(private http:HttpClient,
  private recipeService:RecipeService,
  private authService:AuthService){}
storeRecipes(){
  const token= this.authService.getToken();
return this.http.put('https://kais-api-default-rtdb.firebaseio.com/recipes.json?auth='+token,this.recipeService.getRecipes());
}
getRecipes(){
const token= this.authService.getToken();
  
    this.http.get<Recipe[]>('https://kais-api-default-rtdb.firebaseio.com/recipes.json?auth='+token)
    .pipe(
        map((recipes: Recipe[]) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        })
      )
      .subscribe((recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      });
}
ngOnInit() {
}
}