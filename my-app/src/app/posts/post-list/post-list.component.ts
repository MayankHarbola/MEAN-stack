import { Post } from './../post.model';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  ngOnInit(){}
  // posts =
  // [
    // {title : "First Post",content: "this is the first post's content"},
    // {title : "First Post",content: "this is the first post's content"},
    // {title : "First Post",content: "this is the first post's content"},
    // {title : "First Post",content: "this is the first post's content"},
  // ];
  //recieving data from parnent to child
@Input() posts:Post[] = [];


}
