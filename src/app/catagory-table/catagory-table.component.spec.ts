import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatagoryTableComponent } from './catagory-table.component';

describe('CatagoryTableComponent', () => {
  let component: CatagoryTableComponent;
  let fixture: ComponentFixture<CatagoryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatagoryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatagoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
