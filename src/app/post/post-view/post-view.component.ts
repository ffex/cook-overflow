import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Ingredient } from 'src/app/ingredients/ingredient.models';
import { IngredientService } from 'src/app/ingredients/ingredient.service';
import { Post } from '../post.models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {
  idPost?: string;
  post!: Post;
  ingredients: Ingredient[] = [];
  editorRecipeVisible=false;

  private routeSub?: Subscription;
  constructor(private postService: PostService, private ingredientService: IngredientService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.post =this.route.snapshot.data['post'];
    this.getIngredients();
    /* Object.assign(new Post(), this.route.snapshot.data.post) as FormUpdateSpedizioneIn; */
/*     this.routeSub = this.route.params.subscribe(params => {
      this.idPost=params["id"];
      let promise = this.postService.getPromisePostDocument(this.idPost!);
      promise.then((response) => {
        this.post = response;
        this.getIngredients();
      }, function (error) {
        console.log(error); // Failure
      });
    }); */
    
  }
  getIngredients() {
    let promise = this.ingredientService.getIngrediets(this.post.ingredients!);
    if (promise) {

      promise.then((response) => {
        this.ingredients = response.documents;
      }, function (error) {
        console.log(error); // Failure
      });
    }
  }
  newRecipe(){
    this.editorRecipeVisible=true;
  }
  ngOnDestroy() {
    this.routeSub!.unsubscribe();
  }

}
