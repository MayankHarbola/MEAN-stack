import { Post } from './posts/post.model';
import { Component } from '@angular/core';

@Component({   // component decorator
  selector: 'app-root',  // name of the componet that will be used in the html file
  templateUrl: './app.component.html',  //instead of templateURL we can also use template: '<h1>we can write whole html code like this</h1>'
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPost: Post[] =[];
  onPostAdded(childpost)
  {
    this.storedPost.push(childpost);
  }
}
