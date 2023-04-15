import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandImageComponent } from './brand-image.component';

describe('BrandImageComponent', () => {
  let component: BrandImageComponent;
  let fixture: ComponentFixture<BrandImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandImageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
