import { TestBed } from '@angular/core/testing';

import { LoanResolver } from './loan.resolver';

describe('ClientResolver', () => {
  let resolver: LoanResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoanResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
