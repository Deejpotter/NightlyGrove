import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
  { path: 'auth', component: AuthComponent, data: { animation: 'auth' } },
  { path: 'password-reset', component: PasswordResetComponent, data: { animation: 'password-reset' } },
  {
    path: 'confirm-password-reset',
    component: ConfirmPasswordResetComponent,
    data: { animation: 'confirm-password-reset' },
  },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'test', component: TestComponent, data: { animation: 'test' } },
  { path: 'checkout', component: CheckoutComponent, data: { animation: 'checkout' } },
  {
    path: 'products',
    loadChildren: () => import('./pages/test/test.module').then((m) => m.TestModule),
    data: { animation: 'checkout' },
  },
  {
    path: 'account',
    component: UserAccountComponent,
    data: { animation: 'account' },
    canActivate: [AuthenticationGuard],
  },
  { path: '', component: HomeComponent, data: { animation: 'home' }, pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
