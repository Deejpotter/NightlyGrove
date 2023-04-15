import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from '@app/auth/authentication.guard';
import { AuthComponent } from '@app/auth/components/auth/auth.component';
import { PasswordResetComponent } from '@app/auth/components/password-reset/password-reset.component';
import { ConfirmPasswordResetComponent } from '@app/auth/components/confirm-password-reset/confirm-password-reset.component';
import { HomeComponent } from '@app/pages/home/home.component';
import { AboutComponent } from '@app/pages/about/about.component';
import { TestComponent } from '@app/pages/test/test.component';
import { UserAccountComponent } from '@app/pages/user-account/user-account.component';
import { CheckoutComponent } from '@app/pages/checkout/checkout.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'confirm-password-reset', component: ConfirmPasswordResetComponent },
  { path: 'about', component: AboutComponent },
  { path: 'test', component: TestComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'products', loadChildren: () => import('./pages/test/test.module').then((m) => m.TestModule) },
  { path: 'account', component: UserAccountComponent, canActivate: [AuthenticationGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
