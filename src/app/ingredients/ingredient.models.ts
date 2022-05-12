export interface Ingredient {
    $id?:string;
    name?:string;
    image?:string;
    subgroup?:string;
    description?:string;
}
export interface IngredientListBox {
    label?: string; 
    value: string;
    
}
export interface SubGroupListBox {
    label: string; 
    value?: string;
    items: []
}
export interface Group {
    $id?:string;
    name?:string;
    ingredients?:string[];
    color?:string;
}