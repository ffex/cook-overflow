import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTagComponent } from './element-tag.component';

describe('ElementTagComponent', () => {
  let component: ElementTagComponent;
  let fixture: ComponentFixture<ElementTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
