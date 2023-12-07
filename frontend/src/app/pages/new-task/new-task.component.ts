import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{
  @ViewChild('taskTitleInput') taskTitleInput!: ElementRef;
  
    constructor(private taskService: TaskService, private router: ActivatedRoute) { }
  
    listId!: string;

    ngOnInit() {
      this.router.params.subscribe(
        (params: Params) => {
          this.listId = params['listId'];
          console.log(this.listId);
      })
    }

    // createTask() {
    //   const inputValue = this.taskTitleInput.nativeElement.value;
    //   this.taskService.createTask(inputValue, this.listId).subscribe((newTask: any) => {
    //     console.log(newTask);
    //   })
    //   }
    }
