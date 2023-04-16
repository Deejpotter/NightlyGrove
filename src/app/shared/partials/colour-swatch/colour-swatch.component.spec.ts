import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourSwatchComponent } from './colour-swatch.component';

describe('ColourSwatchComponent', () => {
  let component: ColourSwatchComponent;
  let fixture: ComponentFixture<ColourSwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColourSwatchComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ColourSwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
