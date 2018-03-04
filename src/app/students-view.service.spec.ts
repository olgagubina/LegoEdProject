import { TestBed, inject } from '@angular/core/testing';

import { StudentsViewService } from './students-view.service';

describe('StudentsViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentsViewService]
    });
  });

  it('should be created', inject([StudentsViewService], (service: StudentsViewService) => {
    expect(service).toBeTruthy();
  }));
});
