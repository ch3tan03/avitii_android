import { TestBed } from '@angular/core/testing';

import { BankDetailsVerifyGuard } from './bank-details-verify.guard';

describe('BankDetailsVerifyGuard', () => {
  let guard: BankDetailsVerifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BankDetailsVerifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
