import { Component, Input, OnInit } from '@angular/core';
import { Recipe, Step } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-view-item',
  templateUrl: './recipe-view-item.component.html',
  styleUrls: ['./recipe-view-item.component.css']
})
export class RecipeViewItemComponent implements OnInit {
  @Input() recipe!:Recipe;
  steps?: Step[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.fillSteps();

  }

  fillSteps(){
    this.recipeService.ConvertRecipeToSteps(this.recipe).then((result)=>{
      console.log(result);
      this.steps=result;
    })
  }

}
