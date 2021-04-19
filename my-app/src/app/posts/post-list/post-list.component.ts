import { PostsService } from './../posts.service';
import { Post } from './../post.model';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  // dependency injection of service
  constructor(public postService:PostsService)//this line will create postService variable which is of type of service class defined and also assign a value of it see lec 15 if doubt
  {
    console.log("this is constructor ..........")
  }
  ngOnInit()
  {
    console.log("this is working .......");
    this.posts = this.postService.getPost();
  }
  // posts =
  // [
    // {title : "First Post",content: "this is the first post's content"},
    // {title : "First Post",content: "this is the first post's content"},
    // {title : "First Post",content: "this is the first post's content"},
  // ];
  //recieving data from parnent to child
// @Input() posts:Post[] = [];

 posts:Post[] = [];



}
