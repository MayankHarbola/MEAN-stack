import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule, MatExpansionModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.componet';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';

@NgModule({
  declarations: [ // entry point for all the module
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,

  ],
  imports: [ // entry point for all the module that are inbuilt by angular
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent] // point from where it has to start
})
export class AppModule { }
