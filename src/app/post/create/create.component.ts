import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { SelectComponent } from 'src/app/ingredients/select/select.component';
import { AuthService } from 'src/app/services/auth.service';
import { IngredientToStringPipe } from '../ingredient-to-string.pipe';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild(SelectComponent) child!: SelectComponent;
  text?: string;
  title?:string;
  constructor(private postService: PostService,private authService: AuthService) { }

  ngOnInit(): void {
  }
  save(event: any) {
    //TODO crea post
    let user = this.authService.getAccount();
    const pipe = new IngredientToStringPipe();
    const post = {
      title:this.title,
      text : this.text,
      ingredients: pipe.transform(this.child.selectedIngredients!),
      userId: user!.$id,

    };
    
    let promise = this.postService.getPromiseSavePost(post);
    promise.then(function (response) {
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
    });

  }

}
