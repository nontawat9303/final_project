import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBillComponent } from './summary-bill.component';

describe('SummaryBillComponent', () => {
  let component: SummaryBillComponent;
  let fixture: ComponentFixture<SummaryBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryBillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
