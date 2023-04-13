import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AuthComponent } from '@app/auth/components/auth/auth.component';

const routes: Routes = [{ path: 'login', component: AuthComponent, data: { title: marker('Login') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
