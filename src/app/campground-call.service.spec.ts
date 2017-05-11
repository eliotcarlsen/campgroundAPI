import { TestBed, inject } from '@angular/core/testing';

import { CampgroundCallService } from './campground-call.service';

describe('CampgroundCallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampgroundCallService]
    });
  });

  it('should ...', inject([CampgroundCallService], (service: CampgroundCallService) => {
    expect(service).toBeTruthy();
  }));
});
