import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private app: AppComponent
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [, Validators.required],
      password: [, Validators.required],
    });

    this.userService.getAllUsers().subscribe((res) => {
      console.log(res);
    });
  }

  login() {
    let model = this.loginForm.value;
    this.userService.userLogin(model).subscribe(
      (res: any) => {
        console.log(res);
        this.app.isLoggedIn = true;
        localStorage.setItem('user-token', res.token);
        this.router.navigateByUrl('/products');
      },
      (err) => {
        alert('Error while logging in');
      }
    );
  }
}
