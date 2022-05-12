import { Pipe, PipeTransform } from "@angular/core";
import { Ingredient, IngredientListBox, SubGroupListBox } from "./ingredient.models";

@Pipe({ name: 'ingredientToListbox' })
export class IngredientToListboxPipe implements PipeTransform {
    transform(value: Ingredient[]): SubGroupListBox[] {
        let map = new Map();
        let result: SubGroupListBox[]=[];
        value.forEach(obj => { 
            if (!map.get(obj.subgroup)) {
                let sg:SubGroupListBox = {label:obj.subgroup!,value:obj.subgroup,items:[]};
                result.push(sg);
                map.set(obj.subgroup,sg.items)
            }
            
            map.get(obj.subgroup).push({ label: obj.name, value: obj })
        });
        return result;
    }
}