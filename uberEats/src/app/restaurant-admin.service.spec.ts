import { TestBed } from '@angular/core/testing';

import { RestaurantAdminService } from './restaurant-admin.service';

describe('RestaurantAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestaurantAdminService = TestBed.get(RestaurantAdminService);
    expect(service).toBeTruthy();
  });
});
