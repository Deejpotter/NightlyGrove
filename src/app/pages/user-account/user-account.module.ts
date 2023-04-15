import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserAccountComponent } from '@app/pages/user-account/user-account.component';
@NgModule({
  declarations: [UserAccountComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: UserAccountComponent }])],
})
export class UserAccountModule {}
