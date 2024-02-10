import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged=new Subject<Recipe[]>();
    private recipes:Recipe[]=[
        new Recipe('Test1','Test of new recipe1',
        'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
        [new Ingredient ('Met',8),
        new Ingredient ('banana',15)
    ]),
        new Recipe('Test2','Test of new recipe2',
        'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
        [new Ingredient ('Meet',1),
        new Ingredient ('bread',20)
    ]),
      ];
      constructor(private slService:ShoppingListService){}
      setRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipesChanged.next(this.recipes.slice())
      }
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index];
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
           this.slService.addIngredients(ingredients);
      }
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipesChanged.next(this.recipes.slice());
      }
}