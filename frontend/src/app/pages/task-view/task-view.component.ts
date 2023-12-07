import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  
  lists: any[] = [];
  tasks: any[] = [];

  constructor(
    private taskService: TaskService,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(
      (params: Params) => {
        console.log(params);
        const listId = params['listId'];
        if (listId) {
          this.taskService.getTasks(listId).subscribe((tasks: any) => {
            this.tasks = tasks;
          });
        }
    }
    );

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;
    });
  }
}
