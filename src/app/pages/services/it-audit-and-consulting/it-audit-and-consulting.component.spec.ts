import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAuditAndConsultingComponent } from './it-audit-and-consulting.component';

describe('ItAuditAndConsultingComponent', () => {
  let component: ItAuditAndConsultingComponent;
  let fixture: ComponentFixture<ItAuditAndConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItAuditAndConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItAuditAndConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
