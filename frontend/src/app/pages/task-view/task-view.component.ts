import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { List } from 'src/app/models/list.model';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss'],
})
export class TaskViewComponent implements OnInit {
  lists: List[] = [];
  tasks: Task[] = [];
  taskCounts: { [key: string]: number } = {};
  completedTaskCounts: { [listId: string]: number } = {};

  username: string = '';

  selectedListId: string = '';

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.username = this.authService.getUsername() || '';
    this.router.params.subscribe((params: Params) => {
      console.log(params);
      const listId = params['listId'];
      if (listId) {
        this.selectedListId = listId;
        this.taskService.getTasks(listId).subscribe((tasks: any) => {
          this.tasks = tasks;
        });
      }
    });

    this.taskService.getLists().subscribe((lists: any) => {
      this.lists = lists;

      // Fetch task counts for each list
      this.lists.forEach((list) => {
        this.taskService.getTasks(list._id).subscribe((tasks: any) => {
          this.taskCounts[list._id] = tasks.length; // Store task count for this list ID
          
          const completedTasks = tasks.filter((task: any) => task.completed);
          this.completedTaskCounts[list._id] = completedTasks.length;
        });
      });

      this.route.navigateByUrl(`lists/${lists[0]._id}`);
    });
  }

  onTaskClick(task: Task) {
    // Set task to completed
    this.taskService.complete(task).subscribe(() => {
      // the task has been set to completed successfully
      task.completed = !task.completed;
      console.log('Completed successfully!');
    });
  }

  onDeleteListClick() {
    this.taskService.deleteList(this.selectedListId).subscribe((res: any) => {
      this.route.navigate(['/lists']);
      console.log(res);
    });
  }

  onDeleteTaskClick(id: string) {
    this.taskService
      .deleteTask(this.selectedListId, id)
      .subscribe((res: any) => {
        this.tasks = this.tasks.filter((val) => val._id !== id);
        console.log(res);
      });
  }
}
