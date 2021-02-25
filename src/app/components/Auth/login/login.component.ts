import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { User } from '../../models/user.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authSvc: AuthService,
    private router: Router,
    private messageService: MessageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}


  async onLogin() {
    const { email, password } = this.loginForm.value;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.toastr.success('Has iniciado sesion con exito!', 'Inicio de sesión');
        this.router.navigate(['/dashboard']);
      } else {
        this.toastr.error('Credenciales incorrectas!', 'Inicio de sesión');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
