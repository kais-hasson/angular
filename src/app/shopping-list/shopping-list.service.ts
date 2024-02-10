import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.module";

export class ShoppingListService{
    ingredientsChanged=new Subject<Ingredient[]>();
    startedEditing=new Subject<number>();
    ingredients: Ingredient[]=[
        new Ingredient('Apple',5),
        new Ingredient('Tomatos',10)
    ];
    getIngredients(){
        return this.ingredients.slice();
    }
    getIngredient(index:number){
        return this.ingredients[index];
    }
    AddIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
        }
    addIngredients(ingredeints:Ingredient[]){
        this.ingredients.push(...ingredeints);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    onUpdateIngreadient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngreadient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}