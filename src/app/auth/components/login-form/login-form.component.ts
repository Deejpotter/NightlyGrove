import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginContext } from '@app/auth';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Output() formSubmit = new EventEmitter<any>();
  public error: string | undefined;
  public isLoading = false;
  public loginForm: FormGroup;
  @Output() onSubmit = new EventEmitter<LoginContext>();

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
