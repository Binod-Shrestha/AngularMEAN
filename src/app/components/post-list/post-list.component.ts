import { Component, OnInit, Input } from '@angular/core';
import {Post} from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
// posts = [
//   {title: 'First Post', content: 'This is the first component'},
//   {title: 'Second Post', content: 'This is the second component'},
//   {title: 'Third Post', content: 'This is the third component'}
// ];
 @Input() posts: Post[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
