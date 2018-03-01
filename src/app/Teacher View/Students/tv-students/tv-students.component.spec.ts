import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvStudentsComponent } from './tv-students.component';

describe('TvStudentsComponent', () => {
  let component: TvStudentsComponent;
  let fixture: ComponentFixture<TvStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
