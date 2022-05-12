import { Injectable } from "@angular/core";
import { Query } from "appwrite";
import { AppService } from "../app.service";
import { Ingredient } from "../ingredients/ingredient.models";
import { IngredientService } from "../ingredients/ingredient.service";
import { IngredientToStringPipe } from "../post/ingredient-to-string.pipe";
import { Recipe, Step } from "./recipe.model";

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private collID:string="627cc52881bedd049b92";
    /**
     *
     */
    constructor(private ingredientService: IngredientService,private appService: AppService) {

    }
    
    getPromiseSave(value:Recipe){
        return this.appService.getAppWriteSdk().database.createDocument(this.collID, 'unique()', value);
    }
    getPromiseListDocumentEquals(values:string[]){
        return this.appService.getAppWriteSdk().database.listDocuments(this.collID,[
            Query.equal('$id', values)]);
    }
    getRecipes(ids: string[] | undefined) {
        if (!ids) {
            return null;
        }
        if (ids.length > 100) {
            ids = ids.slice(0, 100);
            //TODO prendere anche quelli degli altri.
        }
        return this.getPromiseListDocumentEquals(ids!);
    }

    async ConvertRecipeToSteps(recipe: Recipe): Promise<Step[]> {
        let result: Step[] = [];
        let pipe = new IngredientToStringPipe();
        let ingredients: Ingredient[] = [];
        ingredients = await this.ingredientService.getIngrediets(recipe.ingredients)!.then((response) => {
            
            return response.documents;
        }, function (error) {
            return [];
        });
        console.log(ingredients);
        //ingredients
        result.push(
            {
                numStep: -1,
                title: "Ingredients",
                ingredients: pipe.transform(ingredients,true)
            }
        );
        result.push(
            {
                numStep: 0,
                title: "",
                text:recipe.text
            }
        );
        recipe.steps!.forEach((step) => {
            let stepJson=JSON.parse(step);
            result.push(stepJson);
        });

        return result;

    }
    ConvertStepsToRecipe(steps: Step[]): Recipe {
        let result: Recipe={choosed:false,steps:[]};
        result.text = steps[0].text;
        
        steps.forEach((step) => {
            if(step.numStep!>0){
                let stepJson=JSON.stringify(step);
                result.steps!.push(stepJson);
            }

        });

        return result;

    }
}
/* REFERENCE */
    /* this.steps = [
      {
        numStep: -1,
        title: 'Ingredients',
        ingredients: ['garlic', 'olive oil', 'chilli pepper', 'pasta'],
      },
      {
        numStep: 0,
        title: 'Description',
        text: 'blablablalballa lballblba vlalval',
      },
      {
        numStep: 1,
        title: 'Boil Water',
        text: 'with 2 litres of water boil it, add Salt when it boil',
      },
      {
        numStep: 2,
        title: 'Throw the pasta',
        text: 'throw 2h of pasta in the boiled water',
      },
    ]; */