import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontendComponent } from './fontend.component';

describe('FontendComponent', () => {
  let component: FontendComponent;
  let fixture: ComponentFixture<FontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
