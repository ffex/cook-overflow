import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient } from "../ingredients/ingredient.models";


@Pipe({ name: 'ingredientToString' })
export class IngredientToStringPipe implements PipeTransform {
    transform(value: Ingredient[],name=false): string[] {
        
        let result: string[]=[];
        value.forEach(obj => { 
            if(name){
                result.push(obj.name!);
            }else{
                result.push(obj.$id!);

            }
        });
        return result;
    }
}