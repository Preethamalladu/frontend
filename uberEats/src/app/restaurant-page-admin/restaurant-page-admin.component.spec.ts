import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPageAdminComponent } from './restaurant-page-admin.component';

describe('RestaurantPageAdminComponent', () => {
  let component: RestaurantPageAdminComponent;
  let fixture: ComponentFixture<RestaurantPageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
