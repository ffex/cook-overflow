export interface Post {
    $id?:string;
    title?:string;
    text?:string;
    ingredients?:string[];
    userId?:string;
    rating?:number;
    recipeCount?:number;
    recipes?:string[];
}