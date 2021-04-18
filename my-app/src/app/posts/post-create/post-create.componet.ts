import { Post } from './../post.model';
import { Component ,EventEmitter,Output} from "@angular/core";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'post-create',
  templateUrl:'./post-create.component.html',
  styleUrls:['./post-create.component.css'],
})

export class PostCreateComponent {
  // newPost = 'new post';
  // enteredValue = ' ' ;
  title ='';
  content = '';
  // sneding data from child to parent bind this "postCreated" event with the parent in app.component.html
  @Output()postCreated  = new EventEmitter<Post>();
  // we are emmitting and event postCreated which is of type of post simillar to addeventlistner

  onAddPost(form:NgForm)
  {
    // const post:Post =  {title :this.title,content: this.content};
    if(form.invalid) return;
    const post:Post =  {title : form.value.title,content: form.value.content};

    console.log(post);
    this.postCreated.emit(post);
  }

}
