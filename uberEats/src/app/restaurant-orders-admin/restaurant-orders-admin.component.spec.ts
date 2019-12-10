import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantOrdersAdminComponent } from './restaurant-orders-admin.component';

describe('RestaurantOrdersAdminComponent', () => {
  let component: RestaurantOrdersAdminComponent;
  let fixture: ComponentFixture<RestaurantOrdersAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantOrdersAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantOrdersAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
