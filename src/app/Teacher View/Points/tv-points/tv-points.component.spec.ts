import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPointsComponent } from './tv-points.component';

describe('TvPointsComponent', () => {
  let component: TvPointsComponent;
  let fixture: ComponentFixture<TvPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
