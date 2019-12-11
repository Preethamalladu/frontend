import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomeMenuComponent } from './restaurant-home-menu.component';

describe('RestaurantHomeMenuComponent', () => {
  let component: RestaurantHomeMenuComponent;
  let fixture: ComponentFixture<RestaurantHomeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantHomeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
