import { Component, OnInit } from '@angular/core';
import {PostlistComponent} from '../postlist/postlist.component';
import {Post} from '../../module/post';
import {post} from 'selenium-webdriver/http';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  posts:Array<Post> ;
  post:Post ;




  taille:number ;

  constructor(public postlist:PostlistComponent) {
    this.taille = postlist.posts.length;
    this.posts = postlist.posts;

 this.posts.forEach(e=>{
   console.log(e.loveIt)
 })

  }




  ngOnInit() {


  }

  like(p:Post){

p.loveIt++;



  }

  dislike(p:Post){

p.loveIt-- ;

  }


  getLoveIt(){
    return this.post.loveIt ;

  }


}
