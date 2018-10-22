import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

	@Input() postTitle: string;
	@Input() postContent: string;
	@Input() loveIts: number;
	@Input() postCreatedDate: Date;
  @Input() indexPost: number;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onIncreaseLoveIts(indexPost){
    this.postsService.increaseLove(indexPost);
  }

  onDecreaseLoveIts(indexPost){
		this.postsService.decreaseLove(indexPost);
  }

  onDeletePost(post: Post) {
    this.postsService.removePost(post);
  }

}
