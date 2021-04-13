import { TestBed } from '@angular/core/testing';

import { UsersIncomeExpenseVerifyGuard } from './users-income-expense-verify.guard';

describe('UsersIncomeExpenseVerifyGuard', () => {
  let guard: UsersIncomeExpenseVerifyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UsersIncomeExpenseVerifyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
