import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointItemsComponent } from './point-items.component';

describe('PointItemsComponent', () => {
  let component: PointItemsComponent;
  let fixture: ComponentFixture<PointItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
