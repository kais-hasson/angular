import { Ingredient } from "../shared/ingredient.module";

export class Recipe {
    public name :string;
    public description :string;
    public imagePath:string;
    public ingredients!: Ingredient[];
    constructor(name:string,description:string,imagPath:string,ingredients: Ingredient[]){
        this.name=name;
        this.description=description;
        this.imagePath=imagPath;
        this.ingredients=ingredients;
    }
}