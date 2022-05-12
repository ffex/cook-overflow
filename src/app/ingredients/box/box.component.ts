import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient.models';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  @Input() list:Ingredient[] = [];
  @Input() border:boolean = true;
  @Input() fixedSize:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
