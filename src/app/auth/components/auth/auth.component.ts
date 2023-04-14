import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Logger, UntilDestroy, untilDestroyed } from 'src/app/shared';
import { AuthenticationService, LoginContext, SignupContext } from '@app/auth';
import { ToastService } from '@app/shared/services/toast.service';
import next from 'ajv/dist/vocabularies/next';

const log = new Logger('Login');

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  error: string | undefined;
  authForm!: FormGroup;
  isLoading = false;
  selectedTab: 'login' | 'signup' = 'login';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private toastService: ToastService
  ) {}

  ngOnInit() {
    this.createForm();
  }
  selectTab(tab: 'login' | 'signup') {
    this.selectedTab = tab;
  }

  login(context: LoginContext) {
    this.toastService.show('Login successful', 'success');
    this.authenticationService.login(context).subscribe({
      next: (credentials) => {
        console.log('Login successful', credentials);
        this.toastService.show('Login successful', 'success');
      },
      error: (error) => {
        console.log('Login failed', error);
        this.toastService.show('Login failed', 'danger');
      },
    });
  }

  signup(context: SignupContext) {
    this.authenticationService.signup(context).subscribe(
      (user) => {
        console.log('Signup successful', user);
        this.toastService.show('Signup successful', 'success');
        // Redirect or perform other actions after successful signup
      },
      (error) => {
        console.log('Signup failed', error);
        this.toastService.show('Signup failed', 'danger');
        // Show an error message or perform other actions on signup failure
      }
    );
  }

  private createForm() {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
