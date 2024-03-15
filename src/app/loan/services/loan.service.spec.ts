/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoanService } from './loan.service';

describe('Service: LoanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoanService]
    });
  });

  it('should ...', inject([LoanService], (service: LoanService) => {
    expect(service).toBeTruthy();
  }));
});
