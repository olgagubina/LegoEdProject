import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownPrizesComponent } from './dropdown-prizes.component';

describe('DropdownPrizesComponent', () => {
  let component: DropdownPrizesComponent;
  let fixture: ComponentFixture<DropdownPrizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownPrizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
