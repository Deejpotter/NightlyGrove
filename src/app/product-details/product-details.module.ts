import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from '@app/product-details/product-details.component';

@NgModule({
  declarations: [ProductDetailsComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ProductDetailsComponent }])],
})
export class ProductDetailsModule {}
