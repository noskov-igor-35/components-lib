import { TestBed } from '@angular/core/testing';

import { TestComponentLibService } from './test-component-lib.service';

describe('TestComponentLibService', () => {
  let service: TestComponentLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestComponentLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
