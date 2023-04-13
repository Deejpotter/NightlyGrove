import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nModule } from '@app/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '@app/auth/components/auth/auth.component';
import { SignupFormComponent } from '@app/auth/components/signup-form/signup-form.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ConfirmPasswordResetComponent } from './components/confirm-password-reset/confirm-password-reset.component';
import { SharedModule } from 'src/app/shared';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, TranslateModule, NgbModule, I18nModule, AuthRoutingModule, SharedModule],
  declarations: [
    AuthComponent,
    SignupFormComponent,
    PasswordResetComponent,
    ConfirmPasswordResetComponent,
    LoginFormComponent,
  ],
})
export class AuthModule {}
