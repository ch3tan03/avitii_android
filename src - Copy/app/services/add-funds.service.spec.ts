import { TestBed } from '@angular/core/testing';

import { AddFundsService } from './add-funds.service';

describe('AddFundsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddFundsService = TestBed.get(AddFundsService);
    expect(service).toBeTruthy();
  });
});
