import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsFormDialogComponent } from './points-form-dialog.component';

describe('PointsFormDialogComponent', () => {
  let component: PointsFormDialogComponent;
  let fixture: ComponentFixture<PointsFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
