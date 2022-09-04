import { TestBed } from '@angular/core/testing';

import { SuperAuthGuard } from './super-auth.guard';

describe('SuperAuthGuard', () => {
  let guard: SuperAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SuperAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
