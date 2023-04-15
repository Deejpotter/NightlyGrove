import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListingComponent } from './product-listing.component';

@NgModule({
  declarations: [ProductListingComponent],
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ProductListingComponent }])],
})
export class ProductListingModule {}
