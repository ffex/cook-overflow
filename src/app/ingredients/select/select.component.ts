import { Component, OnInit } from '@angular/core';
import { SelectItemGroup } from 'primeng/api';
import { AppService } from 'src/app/app.service';
import { IngredientToListboxPipe } from '../ingredient-to-listbox.pipe';
import { Group, Ingredient } from '../ingredient.models';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  selectedIngredients: Ingredient[];
  groupedIngredients: SelectItemGroup[];
  selectedGroup: Group;
  groups: Group[];


  constructor(private appService: AppService, private ingredientService: IngredientService) {
    this.selectedIngredients = [];
    this.groupedIngredients = [];
    this.groups = [];
    this.selectedGroup = {};

    //mettere combo con i group
    this.loadGroup();
    //chiamata per prendere gli ingredienti[id],
    //chiamata per prendere gli ingredienti completi
    // costruire i sotto gruppi
  }

  ngOnInit(): void {

  }
  loadGroup() {
    let promise = this.appService.getPromiseGroupListDocument();

    promise.then((response) => {
      this.groups = response.documents;
    }, function (error) {
      console.log(error); // Failure
    });
  }
  onSelectedGroup(event: any) {
    let promise = this.ingredientService.getIngrediets(event.value.ingredients);
    //errore
    if (promise) {

      promise.then((response) => {

        const pipe = new IngredientToListboxPipe();
        this.groupedIngredients = pipe.transform(response.documents);
      }, function (error) {
        console.log(error); // Failure
      });
    }
  }

}
