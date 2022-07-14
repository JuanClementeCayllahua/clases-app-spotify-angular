import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/servicios/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService
    , private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email
        ]),
        password: new FormControl('',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(12)
          ])
      }
    )
  }
  sendLogin(): void {
    // console.log('gg hola');

    const { email, password } = this.formLogin.value

    this.authService.sendCredencia(email, password).subscribe(responseOk => {
      const { data, tokenSession } = responseOk;

      this.cookie.set('token', tokenSession, 4, '/')
      console.log('sesion iniciada correctamnte');
      this.router.navigate(['/','promos'])

    }, error => {
      this.errorSession = true
      console.log('error email pwd ');
    })
  }

}
