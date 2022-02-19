import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDevelopementComponent } from './mobile-developement.component';

describe('MobileDevelopementComponent', () => {
  let component: MobileDevelopementComponent;
  let fixture: ComponentFixture<MobileDevelopementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDevelopementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDevelopementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
