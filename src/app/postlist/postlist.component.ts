import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import {Post} from '../../module/post';




@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

post :Post ;
posts:Array<Post> ;
 taille:number ;
  constructor(public appComponenet:AppComponent) {


this.posts=appComponenet.posts ;
this.taille=appComponenet.posts.length ;






  }

  ngOnInit() {



  }






}
