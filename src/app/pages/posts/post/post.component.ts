import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  @Output() clickPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  onClick() {
    console.log(this.post.id)
    this.clickPost.emit(this.post.id);
  }

}
