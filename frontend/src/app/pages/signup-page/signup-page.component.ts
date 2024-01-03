import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
  }

  onSignupButtonClicked(username: string, email: string, password: string) {
    this.authService.signup(username, email, password).subscribe((res: any) => {
      if (res.status === 200) {
        // Signed up successfully
        this.authService.setUsername(username);
        this.router.navigate(['/lists']);
      }
      console.log(res);
    })
  }
}
