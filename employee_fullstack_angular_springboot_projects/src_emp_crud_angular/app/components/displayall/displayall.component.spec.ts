import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallComponent } from './displayall.component';

describe('DisplayallComponent', () => {
  let component: DisplayallComponent;
  let fixture: ComponentFixture<DisplayallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayallComponent]
    });
    fixture = TestBed.createComponent(DisplayallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
