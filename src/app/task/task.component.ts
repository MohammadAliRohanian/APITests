import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  task=[];
  constructor(private taskservice: TaskserviceService) { }

  ngOnInit() {
    this.taskservice.getData().subscribe(data => this.task = data);
  }

  //az json delete nemikone!!!
  deleteItem(item) {
    this.task.splice(item,1);
    this.taskservice.deleteData(item).subscribe((data) => {
      console.warn("task",item);
    })
  }
}
