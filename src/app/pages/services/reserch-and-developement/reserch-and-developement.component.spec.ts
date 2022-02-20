import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserchAndDevelopementComponent } from './reserch-and-developement.component';

describe('ReserchAndDevelopementComponent', () => {
  let component: ReserchAndDevelopementComponent;
  let fixture: ComponentFixture<ReserchAndDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserchAndDevelopementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserchAndDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
