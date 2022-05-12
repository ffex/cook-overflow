import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/ingredients/ingredient.models';
import { Post } from 'src/app/post/post.models';
import { PostService } from 'src/app/post/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { Step } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  @Input() post?: Post;
  @Input() ingredients?: string[] = [];
  insSteps: Step[];
  countStep = 2;
  title: string = "";


  constructor(private authService: AuthService, private recipeService: RecipeService, private postService: PostService) {
    this.insSteps = [{ numStep: 0, title: '', text: '' },
    { numStep: 1, title: '', text: '' }];

  }

  ngOnInit(): void {
  }
  onAddClick() {
    this.insSteps.push({ numStep: this.countStep, title: '', text: '' });
    this.countStep++;
  }
  save() {
    let user = this.authService.getAccount();
    let recipe = this.recipeService.ConvertStepsToRecipe(this.insSteps);
    recipe.rating = 0;
    recipe.title = this.title;
    recipe.userId = user?.$id;
    recipe.ingredients = this.ingredients;
    //salva recipe e prendi id

    let promise = this.recipeService.getPromiseSave(recipe);
    promise.then((response) => {
      console.log(response); // Success
      let id = response.$id;
      this.post!.recipeCount!++;
      if(this.post!.recipes){
        this.post!.recipes=[];
      }
      this.post!.recipes!.push(id);
      let promisePost=this.postService.getPromiseUpdate(this.post!);
      promisePost.then((response) => {
        console.log(response); // Success
      }, function (error) {
        console.log(error); // Failure
      });

    }, function (error) {
      console.log(error); // Failure
    });
    //modifica post e upload la recipe

  }
}
