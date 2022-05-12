import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-element-tag',
  templateUrl: './element-tag.component.html',
  styleUrls: ['./element-tag.component.css']
})
export class ElementTagComponent implements OnInit {
  @Input() name:string|undefined="aaaa";
  @Input() color = "";
  constructor() { }

  ngOnInit(): void {
  }

}
