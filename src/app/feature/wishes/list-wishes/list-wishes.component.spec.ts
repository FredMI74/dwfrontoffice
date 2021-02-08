import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWishesComponent } from './list-wishes.component';

describe('ListWishesComponent', () => {
  let component: ListWishesComponent;
  let fixture: ComponentFixture<ListWishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
