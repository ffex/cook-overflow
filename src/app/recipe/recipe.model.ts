export interface Step {
    numStep?: number;
    title?: string;
    text?: string;
    ingredients?: string[];
}

export interface Recipe {
    $id?:string;
    title?:string;
    text?:string;
    ingredients?:string[];
    steps?:string[];
    userId?:string;
    rating?:number;
    choosed?:boolean;
}
