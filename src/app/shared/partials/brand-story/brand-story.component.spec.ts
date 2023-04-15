import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandStoryComponent } from './brand-story.component';

describe('BrandStorySectionComponent', () => {
  let component: BrandStoryComponent;
  let fixture: ComponentFixture<BrandStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandStoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrandStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
