import { Injectable } from "@angular/core";
import { AppService } from "../app.service";

@Injectable({
    providedIn: 'root',
})
export class IngredientService {
    /**
     *
     */
    constructor(private appService: AppService) {


    }

    getIngrediets(ids: string[] | undefined) {
        if (!ids) {
            return null;
        }
        if (ids.length > 100) {
            ids = ids.slice(0, 100);
            //TODO prendere anche quelli degli altri.
        }
        return this.appService.getPromiseIngListDocumentEquals(ids!);
    }
}