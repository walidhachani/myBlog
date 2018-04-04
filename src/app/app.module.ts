import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostlistComponent } from './postlist/postlist.component';
import {FormsModule} from '@angular/forms';
import { PostListItemComponent } from './post-list-item/post-list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    PostlistComponent,
    PostListItemComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
