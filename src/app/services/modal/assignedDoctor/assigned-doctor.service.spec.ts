import { TestBed } from '@angular/core/testing';

import { AssignedDoctorService } from './assigned-doctor.service';

describe('AssignedDoctorService', () => {
  let service: AssignedDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
