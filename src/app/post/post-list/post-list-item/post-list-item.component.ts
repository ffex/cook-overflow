import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IngredientToListboxPipe } from 'src/app/ingredients/ingredient-to-listbox.pipe';
import { Ingredient } from 'src/app/ingredients/ingredient.models';
import { IngredientService } from 'src/app/ingredients/ingredient.service';
import { Post } from '../../post.models';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() post!: Post;
  ingredients: Ingredient[] = [];
  constructor(private appService: AppService, private ingredientService: IngredientService) { }

  ngOnInit(): void {
    this.getIngredients();
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

}
