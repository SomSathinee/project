import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onClickSignIn() {
    if (this.form.invalid) {
      console.log("กรุณากรอกข้อมูลให้ครบ");
      return;
    }

    const val = this.form.value;
    console.log(val.email)

    this.authService.login(val.email, val.password)
      .subscribe(() => {
        alert(val.email + ' เข้าสู่ระบบสำเร็จ')
    
      },
        err => alert(err.message)
      );
  }
  onclickForgotPassword(){
    this.router.navigate(['/forgot-password'])
  }
  onClickRegister(){
    this.router.navigate(['/register'])
  }
}
