import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import {MenubarModule} from 'primeng/menubar';
import { SharedModule } from 'primeng/api';

import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {PasswordModule} from 'primeng/password';
import { SelectComponent } from './ingredients/select/select.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoxComponent } from './ingredients/box/box.component';
import { ElementTagComponent } from './ingredients/element-tag/element-tag.component'; 
import { TagModule } from 'primeng/tag';
import {EditorModule} from 'primeng/editor';
import { PostComponent } from './post/post.component';
import { CreateComponent } from './post/create/create.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostListItemComponent } from './post/post-list/post-list-item/post-list-item.component';
import { PostViewComponent } from './post/post-view/post-view.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';

import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { RecipeViewComponent } from './recipe/recipe-view/recipe-view.component';
import { RecipeViewItemComponent } from './recipe/recipe-view/recipe-view-item/recipe-view-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SelectComponent,
    BoxComponent,
    ElementTagComponent,
    PostComponent,
    CreateComponent,
    PostListComponent,
    PostListItemComponent,
    PostViewComponent,
    RecipeCreateComponent,
    RecipeViewComponent,
    RecipeViewItemComponent,

  ],
  imports: [
    BrowserModule,
    MenubarModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    SharedModule,
    CardModule,
    PasswordModule,
    ListboxModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    TagModule,
    EditorModule,
    CarouselModule,
    ToastModule,
    InputTextareaModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
