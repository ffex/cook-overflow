import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient } from "../ingredients/ingredient.models";


@Pipe({ name: 'ingredientToString' })
export class IngredientToStringPipe implements PipeTransform {
    transform(value: Ingredient[]): string[] {
        
        let result: string[]=[];
        value.forEach(obj => { 
            result.push(obj.$id!);
        });
        return result;
    }
}