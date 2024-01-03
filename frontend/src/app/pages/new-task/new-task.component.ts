import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit{
  @ViewChild('taskTitleInput') taskTitleInput!: ElementRef;
  
    constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }
    
    listId!: string;

    ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
          this.listId = params['listId'];
          console.log(this.listId);
      })
    }

    createTask(taskTitle: string) {
      const inputValue = this.taskTitleInput.nativeElement.value;
      this.taskService.createTask(inputValue, this.listId).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
      })
      }
    }
