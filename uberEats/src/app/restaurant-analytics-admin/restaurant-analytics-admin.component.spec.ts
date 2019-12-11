import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAnalyticsAdminComponent } from './restaurant-analytics-admin.component';

describe('RestaurantAnalyticsAdminComponent', () => {
  let component: RestaurantAnalyticsAdminComponent;
  let fixture: ComponentFixture<RestaurantAnalyticsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAnalyticsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAnalyticsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
