import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  posts = []
  images;
  pages = [1,2,3,4,5,6]

  constructor(private router: Router) { }

  ngOnInit() {
    this.images = [
      '../../assets/images/posts-BG/cool1.jpg',
      '../../assets/images/posts-BG/cool2.jpg',
      '../../assets/images/posts-BG/cool3.jpg',
      '../../assets/images/posts-BG/cool4.jpg',
      '../../assets/images/posts-BG/cool5.jpg',
      '../../assets/images/posts-BG/cool6.jpg',
      
    ]
    for(let i= 0; i< 15; i++){
      var item = this.images[Math.floor(Math.random() * this.images.length)];
      this.posts.push(item)
    }
  }

  viewPost(post){
    this.router.navigate(['post']);
    console.log('hey')
  }

  nextPage(){
    this.posts = []
    for(let i= 0; i< 15; i++){
      var item = this.images[Math.floor(Math.random() * this.images.length)];
      this.posts.push(item)
    }
  }

  goToPage(){
    this.posts = []
    for(let i= 0; i< 15; i++){
      var item = this.images[Math.floor(Math.random() * this.images.length)];
      this.posts.push(item)
    }
  }

  goTo(sectionNum) {
    document.body.scrollTop = sectionNum * window.innerHeight;
    document.documentElement.scrollTop = sectionNum * window.innerHeight;
  }
}
