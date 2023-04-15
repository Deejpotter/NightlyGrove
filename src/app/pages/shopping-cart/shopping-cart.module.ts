import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from '@app/pages/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [ShoppingCartComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ShoppingCartComponent }])],
})
export class ShoppingCartModule {}
