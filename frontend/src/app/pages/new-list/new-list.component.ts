import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements OnInit {
  @ViewChild('listTitleInput') listTitleInput!: ElementRef;

  constructor(private taskService: TaskService, private router: Router) { }

  ngOnInit() {
  }

  createList() {
    const inputValue = this.listTitleInput.nativeElement.value;
    this.taskService.createList(inputValue).subscribe((response: any) => {
      console.log(response);
       // Now we navigate to /lists/response._id
       this.router.navigate(['/lists', response._id]);
    });
  }
}
