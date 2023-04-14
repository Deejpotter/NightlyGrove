import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { AuthComponent } from '@app/auth/components/auth/auth.component';
import { PasswordResetComponent } from '@app/auth/components/password-reset/password-reset.component';
import { ConfirmPasswordResetComponent } from '@app/auth/components/confirm-password-reset/confirm-password-reset.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  { path: 'auth', component: AuthComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  { path: 'confirm-password-reset', component: ConfirmPasswordResetComponent },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
