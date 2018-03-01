import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardItemsComponent } from './reward-items.component';

describe('RewardItemsComponent', () => {
  let component: RewardItemsComponent;
  let fixture: ComponentFixture<RewardItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
