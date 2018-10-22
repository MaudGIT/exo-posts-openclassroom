import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService {

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
      loveits: 0,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
      loveits: 1,
      createdAt: new Date()
    },{
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto earum laboriosam, inventore distinctio fugit, quos praesentium, exp',
      loveits: -2,
      createdAt: new Date()
    }
  ];
  postSubject = new Subject<Post[]>();

  constructor() {
  	
  }

  emitPosts(){
    this.postSubject.next(this.posts);
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.emitPosts();
  }

  removePost(indexPost){
    this.posts.splice(indexPost, 1);
    this.emitPosts();
  }

  increaseLove(indexPost) {
    this.posts[indexPost]['loveits'] += 1;
  }

  decreaseLove(indexPost) {
    this.posts[indexPost]['loveits'] -= 1;
  }

  
}
