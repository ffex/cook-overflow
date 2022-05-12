import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Post } from "./post.models";
import { PostService } from "./post.service";

@Injectable({ providedIn: 'root' })
export class PostResolveService implements Resolve<Post> {
  constructor(private service: PostService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    
    return this.service.getPromisePostDocument(route.paramMap.get('id')??""!);
  }
}
