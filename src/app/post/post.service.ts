import { Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { Post } from "./post.models";

@Injectable({
    providedIn: 'root',
})
export class PostService{
    private collPostID:string="6279716ccd6698ae615f";
    /**
     *
     */
    constructor(private appService:AppService) {
    }
    getPromiseSavePost(post:Post){
        return this.appService.getAppWriteSdk().database.createDocument(this.collPostID, 'unique()', post);
    }
    getPromisePostListDocument(){
        return this.appService.getAppWriteSdk().database.listDocuments(this.collPostID);
    }
    getPromisePostDocument(id:string){
        return this.appService.getAppWriteSdk().database.getDocument(this.collPostID, id);
    }
    getPromiseUpdate(post:Post){
        return this.appService.getAppWriteSdk().database.updateDocument(this.collPostID, post.$id!, post);
    }
}