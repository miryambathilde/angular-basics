import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe(posts => {
      console.log(posts);
    });
  }
}
