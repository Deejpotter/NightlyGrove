import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, SharedModule],
})
export class TestModule {}
