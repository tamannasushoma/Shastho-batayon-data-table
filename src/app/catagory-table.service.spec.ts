import { TestBed } from '@angular/core/testing';

import { CatagoryTableService } from './catagory-table.service';

describe('CatagoryTableService', () => {
  let service: CatagoryTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatagoryTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
