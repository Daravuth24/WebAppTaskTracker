import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClicked(email: string, password: string) {
    this.authService.login(email, password).subscribe((res: any) => {
      if (res.status === 200) {
        // Logged in successfully
        this.router.navigate(['/lists']);
      }
      console.log(res);
    })
  }
}