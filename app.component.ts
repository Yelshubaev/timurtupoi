import { Component, OnInit } from '@angular/core';
import { Task1Service } from 'src/app/task1.service';
import { PostService } from 'src/app/service/post/post-client.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  title = 'Something';
  aList = [5, 2, -10, 8, -5, 7, -10, 7, 85, 0, 50, 50, 52, 1, 5, 6];
  newList = [];
  newUser1 = [];
  count = 0;
  a = 0;
  b = 0;

  posts = [];



  constructor(
    private addService: Task1Service,
    private postService: PostService
    ) {

  }

  // implements OnInit
 // ngOnInit() {
  //  this.a = this.task1.firstNumber();
  //  this.b = this.task1.secondNumber();
  //  this.task1.add(a,b);
 // }

  doAction() {
    this.title = 'New title' ;
  }

  task1(aList: []) {
    this.newList = [];
    this.aList.forEach((element) => {
     if (element % 2 !== 0) {
      this.newList.push(element);
    }
    });
    console.log(this.newList);
  }
  square(num: number) {
    return num * num;
  }
  task4() {
    this.newList = this.aList.filter(element => element < 0);
  }

  refreshPosts() {
    this.postService.getPosts()
    .subscribe(res => {
      this.newList = res;
      console.log(res);
    });
  }

  refreshPostsId1(): void {
    this.postService.getPostById1(1)
    .subscribe(res => {
     this.newUser1 = res;
      console.log(res);
    });
  }

  refreshPostsId2() {
    this.postService.getPostById1(2)
    .subscribe(res => {
      this.newUser1 = res; 
      console.log(res);
    });
  }
  refreshPostsId3() {
    this.postService.getPostById1(3)
    .subscribe(res => {
      this.newUser1 = res;
      console.log(res);
    });
  }

  refreshPostsId4() {
    this.postService.getPostById1(4)
    .subscribe(res => {
      this.newUser1 = res;
      console.log(res);
    });
  }


}

// task1 is sum of negative array
// task2 is showing only negativ
// task3 is square
// task4 is showing only negative
