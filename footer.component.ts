import { Component, OnInit } from '@angular/core';
import { Task1Service } from 'src/app/task1.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  Task1Service: any;
  a = 0;
  constructor(private addService: Task1Service) { }

  ngOnInit() {
    this.Task1Service.add(20,30)
  }
  counter() {
    this.Task1Service.add(20,30)
    .subscribe((res: number) => {
      this.a = res;
    });
  }

}
