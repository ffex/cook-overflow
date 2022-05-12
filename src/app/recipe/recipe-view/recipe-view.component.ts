import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/post/post.models';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {
  @Input() post!: Post;
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    console.log(this.post);
    this.getRecipes();
  }
  getRecipes() {
    console.log(this.post);
    let promise = this.recipeService.getRecipes(this.post.recipes!);
    if (promise) {

      promise.then((response) => {
        this.recipes = response.documents;
        console.log(this.recipes);
      }, function (error) {
        console.log(error); // Failure
      });
    }
  }
}
