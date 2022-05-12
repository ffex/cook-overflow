import { Injectable } from "@angular/core";
import { Appwrite, Query } from "appwrite";
import { Post } from "./post/post.models";

@Injectable({
    providedIn: 'root',
})
export class AppService {
    private collGroupID:string="6272aae5aab5e5273927";
    private collIngID:string="6272ab8d74fab2a07023";
    

    private appWriteSdk: Appwrite;

    constructor() {
        this.appWriteSdk = new Appwrite();
        this.appWriteSdk.setEndpoint('http://localhost/v1') // Your API Endpoint
            .setProject('626c434b76c24b1a2601') // Your project ID
            ;
    }
    getAppWriteSdk(): Appwrite {
        return this.appWriteSdk;
    }
    getPromiseGroupListDocument(){
        return this.appWriteSdk.database.listDocuments(this.collGroupID);
    }
    getPromiseIngListDocumentEquals(values:string[]){
        return this.appWriteSdk.database.listDocuments(this.collIngID,[
            Query.equal('$id', values)]);
    }
}

