import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private posts:Post[] = [];

   getPost()
   {
    //  return this.posts;  it's not a good practice all though we can do this we don't do this bcz array are pass by refference an by this line anyone can acces our array instead of this we send a copy of array
    // return [...this.posts];
    console.log("getpost working .... ");
      return this.posts;
  }

   addPost(title:string,content:string)
   {
    console.log("addpost working .... ");

      const post:Post = {title:title,content:content}
      this.posts.push(post);
   }
  constructor() { }
}
