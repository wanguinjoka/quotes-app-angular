import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  numberOfLikes: number=0;

  likeButtonClick(){
    this.numberOfLikes++;
  }

  numberOfDislikes: number=0;

  disLikeButtonClick(){
    this.numberOfDislikes++;
  }
  constructor() { }

  ngOnInit() {
  }

}
