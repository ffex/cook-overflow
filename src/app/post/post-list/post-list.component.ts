import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Post } from '../post.models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts?:Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts(){
    let promise = this.postService.getPromisePostListDocument();

    promise.then((response) => {
      this.posts=response.documents;
    }, function (error) {
      console.log(error); // Failure
    });
  }

}
